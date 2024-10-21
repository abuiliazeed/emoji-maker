'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import EmojiGrid from '@/components/EmojiGrid'
import { generateEmoji } from '@/lib/api'
import { Emoji } from '@/types/emoji'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedEmojis, setGeneratedEmojis] = useState<Emoji[]>([])

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const imageUrl = await generateEmoji(prompt)
      setGeneratedEmojis(prevEmojis => [...prevEmojis, { 
        id: Date.now().toString(),
        url: imageUrl, // Change 'emoji' to 'url'
        prompt,
      }])
    } catch (error) {
      console.error('Error generating emoji:', error)
    }
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen p-8 pb-20 font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Emoji maker</h1>
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Enter a prompt to generate an emoji"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={handleGenerate} disabled={isGenerating}>
            Generate
          </Button>
        </div>
        <EmojiGrid emojis={generatedEmojis} isGenerating={isGenerating} />
      </main>
    </div>
  )
}
