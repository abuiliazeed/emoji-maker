import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query

  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'URL is required' })
  }

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch image')
    
    const contentType = response.headers.get('content-type')
    const buffer = await response.arrayBuffer()

    res.setHeader('Content-Disposition', 'attachment; filename="emoji.png"')
    res.setHeader('Content-Type', contentType || 'image/png')
    res.send(Buffer.from(buffer))
  } catch (error) {
    console.error('Error downloading image:', error)
    res.status(500).json({ error: 'Failed to download image' })
  }
}
