// src/proxy.ts -- previously middleware.ts
import { NextRequest } from 'next/server';

// Define your list of allowed origins for CORS.
// const allowedOrigins = [
//   'http://localhost:3000',
// ];

export async function proxy(_request: NextRequest) {
}

// Your existing matcher configuration.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.webp|.*\\.png|.*\\.svg).*)',
  ],
};

