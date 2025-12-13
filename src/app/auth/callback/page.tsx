"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

function CallbackLogic() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const session = await authClient.getSession();

        if (session?.data?.session) {
          const callbackUrl = searchParams.get("callback");

          if (callbackUrl && callbackUrl.startsWith("http://localhost:3001")) {
            window.location.href = "http://localhost:3001/?auth=success";
          } else if (callbackUrl) {
            const redirectUrl = `${callbackUrl}?success=true&sessionId=${session.data.session.id}`;
            window.location.href = redirectUrl;
          } else {
            window.location.href = "http://localhost:3001/?auth=success";
          }
        } else {
          const callbackUrl = searchParams.get("callback");
          if (callbackUrl && !callbackUrl.startsWith("http://localhost:3001")) {
            window.location.href = `${callbackUrl}?success=false&error=no_session`;
          } else {
            window.location.href = "http://localhost:3001/?auth=error&reason=no_session";
          }
        }
      } catch {
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

  return null;
}

export default function AuthCallbackPage() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Completing authentication...</h1>
      <p>Please wait while we redirect you back to the app.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <CallbackLogic />
      </Suspense>
    </div>
  );
}

