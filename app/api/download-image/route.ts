import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch image')
    
    const contentType = response.headers.get('content-type')
    const buffer = await response.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        'Content-Disposition': 'attachment; filename="emoji.png"',
        'Content-Type': contentType || 'image/png',
      },
    })
  } catch (error) {
    console.error('Error downloading image:', error)
    return NextResponse.json({ error: 'Failed to download image' }, { status: 500 })
  }
}
