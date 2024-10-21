import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
})

export async function generateEmoji(prompt: string): Promise<string> {
  const response = await fetch('/api/generate-emoji', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate emoji');
  }

  const data = await response.json();
  return data.imageUrl;
}
