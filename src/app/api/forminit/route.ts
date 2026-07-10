// src/app/api/forminit/route.ts
import { createForminitProxy } from 'forminit/next';

const apiKey = process.env.FORMINIT_API_KEY;

if (!apiKey) {
  throw new Error("Missing required environment variable: FORMINIT_API_KEY");
}

const forminit = createForminitProxy({
  apiKey: apiKey, // TypeScript now knows this is strictly a 'string'
});

export const POST = forminit.POST;