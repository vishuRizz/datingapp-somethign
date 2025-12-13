import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'nodejs';
export const maxDuration = 60; // Allow up to 60 seconds for processing large PDFs

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a PDF file.' },
        { status: 400 }
      );
    }

    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size too large. Please upload a PDF smaller than 10MB.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract text from PDF
    let pdfText: string;
    try {
      // Load pdf-parse module - works in Node.js runtime with serverExternalPackages
      // Using multiple fallback methods for different environments
      let pdfParseModule: any;
      
      try {
        // Try direct require first (works in Node.js runtime)
        // @ts-ignore - require is available in Node.js runtime
        pdfParseModule = require('pdf-parse');
      } catch (requireError) {
        // Fallback to eval require for environments that need it
        try {
          // @ts-ignore
          const requireFunc = new Function('return require("pdf-parse")');
          pdfParseModule = requireFunc();
        } catch (evalError) {
          throw new Error(`Failed to load pdf-parse module: ${requireError instanceof Error ? requireError.message : String(requireError)}`);
        }
      }
      
      if (!pdfParseModule) {
        throw new Error('pdf-parse module is null or undefined');
      }
      
      const { PDFParse } = pdfParseModule;
      
      if (!PDFParse) {
        // If PDFParse doesn't exist, try using the module directly
        // Some versions might export differently
        if (typeof pdfParseModule === 'function') {
          // Legacy format - create instance directly
          const parser = new pdfParseModule({ data: buffer });
          const result = await parser.getText();
          pdfText = result.text || '';
        } else {
          throw new Error('PDFParse class not found in pdf-parse module. Available exports: ' + Object.keys(pdfParseModule).join(', '));
        }
      } else {
        // Create PDFParse instance with the buffer
        const parser = new PDFParse({ data: buffer });
        
        // Extract text from PDF
        const result = await parser.getText();
        pdfText = result.text || '';
      }
      
      if (!pdfText || pdfText.trim().length === 0) {
        throw new Error('PDF parsed successfully but no text content was extracted. The PDF might contain only images or be empty.');
      }
    } catch (error: any) {
      console.error('PDF parse error:', error);
      console.error('Error message:', error?.message);
      console.error('Error stack:', error?.stack);
      console.error('Buffer length:', buffer?.length);
      console.error('Error name:', error?.name);
      return NextResponse.json(
        { 
          error: 'Failed to extract text from PDF. Please ensure the PDF is valid and not corrupted.',
          details: error?.message || String(error),
          errorType: error?.name || 'Unknown',
          debug: process.env.NODE_ENV === 'development' ? {
            hasBuffer: !!buffer,
            bufferLength: buffer?.length,
            errorStack: error?.stack
          } : undefined
        },
        { status: 400 }
      );
    }


    // Get Gemini API key from environment
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Prepare prompt for summarization
    const prompt = `Please provide a comprehensive, well-structured summary of the following PDF document. 

IMPORTANT FORMATTING REQUIREMENTS:
- Use clear markdown formatting with proper headings (## for sections)
- Use bullet points (-) for lists
- Use bold (**text**) for emphasis on important terms
- Add line breaks between sections for readability
- Structure the summary clearly and professionally

STRUCTURE YOUR SUMMARY AS FOLLOWS:

## Overview
Provide a brief 2-3 sentence overview that captures the main purpose and scope of the document.

## Key Points
List the main points discussed using bullet points. Be specific and clear about each major topic covered.

## Important Details
Highlight any important details, findings, conclusions, specific data points, credentials, URLs, technical specifications, or critical information that readers should know.

## Takeaways
Summarize the key takeaways, conclusions, or recommendations from the document. Focus on actionable insights or important implications.

PDF Content:
${pdfText.substring(0, 1000000)}${pdfText.length > 1000000 ? '\n\n[Content truncated due to length]' : ''}

Please ensure your summary is:
- Well-organized and easy to read
- Comprehensive yet concise
- Properly formatted with markdown
- Focused on the most important information
- Professional in tone`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const summary = response.text();

      return NextResponse.json({
        success: true,
        summary,
        fileName: file.name,
        extractedTextLength: pdfText.length,
      });
    } catch (error: any) {
      console.error('Gemini API error:', error);
      return NextResponse.json(
        { error: `Failed to generate summary: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('PDF summarization error:', error);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
