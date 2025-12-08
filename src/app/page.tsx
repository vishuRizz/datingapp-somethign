"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
export default function HomePage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to Intellirite</h1>
      <p>Your AI-powered productivity assistant.</p>
    </div>
    <span>go to </span>
  );
}
