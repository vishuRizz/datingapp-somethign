"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  // If no callback specified, redirect back to web app home after auth
  const callbackUrl = searchParams.get("callback") || "http://localhost:3001/auth/callback";

  const signUpWithGoogle = async () => {
    try {
      setLoading(true);

      const res = await authClient.signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });

      // BetterAuth returns redirect URL in the response
      if (res?.data && typeof res.data === 'object' && 'url' in res.data && typeof res.data.url === 'string') {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.error("Google signup failed:", err);
      alert("Error signing up with Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Sign Up</h1>

      <button
        onClick={signUpWithGoogle}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: "#4285F4",
          color: "white",
          borderRadius: 8,
          fontSize: 16,
          marginTop: 20,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Loading..." : "Sign Up with Google"}
      </button>
    </div>
  );
}

