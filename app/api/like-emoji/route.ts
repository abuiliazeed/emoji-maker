import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { emojiId } = await req.json();

  // Here you would typically update the like count in your database
  // For this example, we'll just return a success response

  return NextResponse.json({ success: true });
}
