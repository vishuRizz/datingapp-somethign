"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);

      const res = await authClient.signIn.social({
        provider: "google",
      });

      // if (res.redirect) window.location.href = res.redirect;
      // if (res.redirectTo) window.location.href = res.redirectTo;

    } catch (err) {
      console.error("Google signin failed:", err);
      alert("Error signing in with Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Sign In</h1>

      <button
        onClick={signInWithGoogle}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: "#4285F4",
          color: "white",
          borderRadius: 8,
          fontSize: 16,
          marginTop: 20,
        }}
      >
        {loading ? "Loading..." : "Sign In with Google"}
      </button>
    </div>
  );
}