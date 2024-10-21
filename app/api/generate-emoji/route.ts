import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const enhancedPrompt = `Create a high-quality, detailed emoji-style image of: ${prompt}. 
    The image should be:
    - Simple yet expressive
    - Vibrant and colorful
    - Have a clean, vector-like appearance
    - Include subtle gradients and shadows for depth
    - Be centered on a transparent background
    - Suitable for use as a modern digital emoji
    Make sure the image captures the essence of "${prompt}" in a fun, emoji-appropriate way.`;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: "1024x1024",
      quality: "hd",
      style: "vivid",
    });

    const imageUrl = response.data[0].url;

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Detailed error in generate-emoji:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate emoji';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
