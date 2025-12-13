"use client";

import { Suspense } from "react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

function SignUpContent() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callback") || "http://localhost:3001/auth/callback";

  const signUpWithGoogle = async () => {
    try {
      setLoading(true);

      const res = await authClient.signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });

      if (res?.data && typeof res.data === 'object' && 'url' in res.data && typeof res.data.url === 'string') {
        window.location.href = res.data.url;
      }
    } catch {
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

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpContent />
    </Suspense>
  );
}

