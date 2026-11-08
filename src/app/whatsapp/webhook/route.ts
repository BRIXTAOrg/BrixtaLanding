// app/whatsapp/webhook/route.ts
import { createHmac, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Meta calls this endpoint when you click Verify and save.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (
    mode === "subscribe" &&
    verifyToken &&
    token === verifyToken &&
    challenge
  ) {
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new Response("Forbidden", { status: 403 });
}

// Meta sends webhook notifications here.
export async function POST(request: Request) {
  const appSecret = process.env.META_APP_SECRET;
  const signature = request.headers.get("x-hub-signature-256");

  if (!appSecret || !signature) {
    return new Response("Unauthorized", { status: 401 });
  }

  const rawBody = await request.text();

  const expected =
    "sha256=" +
    createHmac("sha256", appSecret)
      .update(rawBody)
      .digest("hex");

  const receivedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (
    receivedBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(receivedBuffer, expectedBuffer)
  ) {
    return new Response("Invalid signature", { status: 401 });
  }

  try {
    const payload = JSON.parse(rawBody);

    // We initially care about delivery status updates.
    for (const entry of payload.entry ?? []) {
      for (const change of entry.changes ?? []) {
        if (change.field !== "messages") continue;

        for (const status of change.value?.statuses ?? []) {
          console.log("WhatsApp delivery status:", {
            messageId: status.id,
            status: status.status,
            timestamp: status.timestamp,
          });
        }
      }
    }

    return new Response("EVENT_RECEIVED", { status: 200 });
  } catch {
    return new Response("Invalid payload", { status: 400 });
  }
}
