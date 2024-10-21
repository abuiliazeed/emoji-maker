import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const enhancedPrompt = `Create a simple, cartoon-style emoji face in the style of Apple Memoji. The emoji should have a clean, minimalist design with soft colors and smooth edges. It should be expressive and cute, focusing mainly on the facial features. The background should be a solid, pastel color. Based on this description, create an emoji for: ${prompt}`;

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: "1024x1024",
    });

    return NextResponse.json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
