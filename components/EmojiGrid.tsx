import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Download, Heart } from 'lucide-react'

interface EmojiGridProps {
  emojis: string[]
  isGenerating: boolean
}

export default function EmojiGrid({ emojis, isGenerating }: EmojiGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {isGenerating && (
        <Card className="aspect-square flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </Card>
      )}
      {emojis.map((emoji, index) => (
        <Card key={index} className="aspect-square relative group">
          <Image
            src={emoji}
            alt={`Generated emoji ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button className="text-white hover:text-blue-400">
              <Download size={24} />
            </button>
            <button className="text-white hover:text-red-400">
              <Heart size={24} />
            </button>
          </div>
        </Card>
      ))}
    </div>
  )
}
