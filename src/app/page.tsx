"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Use BetterAuth's signIn.social method
      const redirect = "http://localhost:5173/workspace";
      const data = await authClient.signIn.social({
        provider: "google",
        callbackURL: redirect,
      });

      console.log("Sign-in initiated:", data);
    } catch (err) {
      console.error("Sign-in error:", err);
      setError(err instanceof Error ? err.message : "Failed to sign in with Google");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Intellirite
          </h1>
          <p className="text-gray-600">
            Sign in to continue to your workspace
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 font-medium rounded-lg border-2 border-gray-300 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
                <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853" />
                <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335" />
              </svg>
              <span>Continue with Google</span>
            </>
          )}
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Secure authentication powered by BetterAuth
        </p>
      </div>
    </div>
  );
}
