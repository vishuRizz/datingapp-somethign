// src/lib/auth-client.ts
"use client";

import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000/api/auth",
});