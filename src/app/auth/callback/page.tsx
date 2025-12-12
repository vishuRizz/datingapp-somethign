"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AuthCallbackPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the session after OAuth callback
        const session = await authClient.getSession();
        
        if (session?.data?.session) {
          // Check if callback URL is provided (from Electron) or redirect to web app
          const callbackUrl = searchParams.get("callback");
          
          if (callbackUrl && callbackUrl.startsWith("http://localhost:3001")) {
            // Web app callback - redirect to home page
            window.location.href = "http://localhost:3001/?auth=success";
          } else if (callbackUrl) {
            // Electron callback - redirect to callback URL
            const redirectUrl = `${callbackUrl}?success=true&sessionId=${session.data.session.id}`;
            window.location.href = redirectUrl;
          } else {
            // Default: redirect to web app home
            window.location.href = "http://localhost:3001/?auth=success";
          }
        } else {
          // No session - redirect with error
          const callbackUrl = searchParams.get("callback");
          if (callbackUrl && !callbackUrl.startsWith("http://localhost:3001")) {
            window.location.href = `${callbackUrl}?success=false&error=no_session`;
          } else {
            window.location.href = "http://localhost:3001/?auth=error&reason=no_session";
          }
        }
      } catch (error) {
        console.error("Auth callback error:", error);
        const callbackUrl = searchParams.get("callback");
        if (callbackUrl && !callbackUrl.startsWith("http://localhost:3001")) {
          window.location.href = `${callbackUrl}?success=false&error=callback_failed`;
        } else {
          window.location.href = "http://localhost:3001/?auth=error&reason=callback_failed";
        }
      }
    };

    handleCallback();
  }, [searchParams]);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Completing authentication...</h1>
      <p>Please wait while we redirect you back to the app.</p>
    </div>
  );
}

