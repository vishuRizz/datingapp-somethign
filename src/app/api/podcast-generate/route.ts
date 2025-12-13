import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';

export const runtime = 'nodejs';
export const maxDuration = 120; // Allow up to 2 minutes for processing

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const textInput = formData.get('text') as string | null;

    if (!file && !textInput) {
      return NextResponse.json(
        { error: 'Please provide either a file or text input' },
        { status: 400 }
      );
    }

    // Extract text from file or use provided text
    let extractedText: string = '';

    if (file) {
      // Validate file type
      const validTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
      ];

      if (!validTypes.includes(file.type)) {
        return NextResponse.json(
          { error: 'Invalid file type. Please upload a PDF or DOCX file.' },
          { status: 400 }
        );
      }

      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size too large. Please upload a file smaller than 10MB.' },
          { status: 400 }
        );
      }

      // Convert file to buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Extract text based on file type
      try {
        if (file.type === 'application/pdf') {
          // Extract text from PDF
          let pdfParseModule: any;
          try {
            // @ts-ignore
            pdfParseModule = require('pdf-parse');
          } catch (requireError) {
            try {
              // @ts-ignore
              const requireFunc = new Function('return require("pdf-parse")');
              pdfParseModule = requireFunc();
            } catch (evalError) {
              throw new Error('Failed to load pdf-parse module');
            }
          }

          const { PDFParse } = pdfParseModule;
          if (!PDFParse) {
            throw new Error('PDFParse class not found');
          }

          const parser = new PDFParse({ data: buffer });
          const result = await parser.getText();
          extractedText = result.text || '';
        } else if (
          file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
          file.type === 'application/msword'
        ) {
          // Extract text from DOCX
          // @ts-ignore
          const mammoth = require('mammoth');
          const result = await mammoth.extractRawText({ buffer });
          extractedText = result.value || '';
        }
      } catch (error: any) {
        console.error('Text extraction error:', error);
        return NextResponse.json(
          {
            error: 'Failed to extract text from file. Please ensure the file is valid and not corrupted.',
            details: error?.message || String(error),
          },
          { status: 400 }
        );
      }

      if (!extractedText || extractedText.trim().length === 0) {
        return NextResponse.json(
          { error: 'No text found in file. The file might be empty or image-based.' },
          { status: 400 }
        );
      }
    } else if (textInput) {
      extractedText = textInput.trim();
    }

    // Limit text length for processing (approximately 5000 words)
    if (extractedText.length > 25000) {
      extractedText = extractedText.substring(0, 25000) + '\n\n[Content truncated for podcast generation]';
    }

    // Get API keys from environment
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    const googleServiceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!googleServiceAccountKey) {
      return NextResponse.json(
        { error: 'Google Cloud service account key not configured' },
        { status: 500 }
      );
    }

    // Step 1: Generate podcast script using Gemini
    let podcastScript: string;
    try {
      const genAI = new GoogleGenerativeAI(geminiApiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const prompt = `Transform the following content into an engaging podcast script with TWO HOSTS having a fun, conversational interaction.

IMPORTANT REQUIREMENTS:
- Create a dialogue between two hosts (Host 1 and Host 2)
- Make it conversational, engaging, and easy to listen to
- Break down complex concepts into digestible conversations
- Use natural, friendly language with occasional humor
- Keep it interesting and dynamic with back-and-forth dialogue
- Format each speaker line as:
  HOST1: [what they say]
  HOST2: [what they say]
  
- Start with a brief introduction from both hosts
- Cover the main points from the content in a conversational way
- End with a brief wrap-up or conclusion
- Keep the total script under 3000 words (approximately 15-20 minutes of speech)

Content to transform:
${extractedText}

Generate the podcast script now:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      podcastScript = response.text();
    } catch (error: any) {
      console.error('Gemini API error:', error);
      return NextResponse.json(
        { error: `Failed to generate podcast script: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    // Step 2: Generate audio using Google Cloud TTS
    try {
      // Parse service account key
      let credentials;
      try {
        // Handle both string JSON and already-parsed JSON
        let keyString = googleServiceAccountKey.trim();
        
        // Remove any surrounding quotes if present (single or double)
        if ((keyString.startsWith('"') && keyString.endsWith('"')) ||
            (keyString.startsWith("'") && keyString.endsWith("'"))) {
          keyString = keyString.slice(1, -1);
        }
        
        // For environment variables, newlines are already escaped as \n
        // Don't convert them to actual newlines - JSON.parse will handle them
        // Just parse directly
        credentials = JSON.parse(keyString);
      } catch (parseError: any) {
        console.error('JSON parse error:', parseError);
        console.error('Key preview (first 200 chars):', googleServiceAccountKey.substring(0, 200));
        console.error('Key length:', googleServiceAccountKey.length);
        
        // Try to fix common issues
        try {
          // Try unescaping if it's double-escaped
          let fixedKey = googleServiceAccountKey.trim();
          if ((fixedKey.startsWith('"') && fixedKey.endsWith('"')) ||
              (fixedKey.startsWith("'") && fixedKey.endsWith("'"))) {
            fixedKey = fixedKey.slice(1, -1);
          }
          // Replace actual newlines with escaped newlines
          fixedKey = fixedKey.replace(/\n/g, '\\n').replace(/\r/g, '');
          credentials = JSON.parse(fixedKey);
          console.log('✓ Fixed JSON parsing issue');
        } catch (secondError) {
          return NextResponse.json(
            { error: `Invalid Google Cloud service account key format. Must be valid JSON. Error: ${parseError.message}. Please ensure the JSON is properly escaped in your environment variable.` },
            { status: 500 }
          );
        }
      }

      const client = new TextToSpeechClient({ credentials });

      // Split script into segments by speaker
      const lines = podcastScript.split('\n').filter(line => line.trim());
      const segments: { speaker: 'HOST1' | 'HOST2', text: string }[] = [];
      let currentSpeaker: 'HOST1' | 'HOST2' | null = null;
      let currentText: string[] = [];

      for (const line of lines) {
        const host1Match = line.match(/^HOST1\s*:\s*(.+)$/i);
        const host2Match = line.match(/^HOST2\s*:\s*(.+)$/i);

        if (host1Match) {
          if (currentSpeaker && currentText.length > 0) {
            segments.push({ speaker: currentSpeaker, text: currentText.join(' ') });
          }
          currentSpeaker = 'HOST1';
          currentText = [host1Match[1].trim()];
        } else if (host2Match) {
          if (currentSpeaker && currentText.length > 0) {
            segments.push({ speaker: currentSpeaker, text: currentText.join(' ') });
          }
          currentSpeaker = 'HOST2';
          currentText = [host2Match[1].trim()];
        } else if (currentSpeaker && line.trim()) {
          currentText.push(line.trim());
        }
      }

      // Add last segment
      if (currentSpeaker && currentText.length > 0) {
        segments.push({ speaker: currentSpeaker, text: currentText.join(' ') });
      }

      // If no segments found (script format might be different), treat entire script as HOST1
      if (segments.length === 0) {
        segments.push({ speaker: 'HOST1', text: podcastScript });
      }

      // Generate audio for each segment
      const audioBuffers: Buffer[] = [];

      for (const segment of segments) {
        // Use different voices for each host
        const voice = segment.speaker === 'HOST1' 
          ? { name: 'en-US-Neural2-F', languageCode: 'en-US' } // Female voice
          : { name: 'en-US-Neural2-D', languageCode: 'en-US' }; // Male voice

        const request = {
          input: { text: segment.text },
          voice: voice,
          audioConfig: {
            audioEncoding: 'MP3' as const,
            speakingRate: 1.0,
            pitch: 0,
            volumeGainDb: 0,
          },
        };

        const [response] = await client.synthesizeSpeech(request);
        
        if (response.audioContent) {
          audioBuffers.push(Buffer.from(response.audioContent));
        }
      }

      // Combine all audio buffers
      const combinedAudio = Buffer.concat(audioBuffers);

      // Convert to base64
      const audioBase64 = combinedAudio.toString('base64');

      return NextResponse.json({
        success: true,
        audioData: audioBase64,
        script: podcastScript,
      });
    } catch (error: any) {
      console.error('Google TTS error:', error);
      return NextResponse.json(
        { error: `Failed to generate audio: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Podcast generation error:', error);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

