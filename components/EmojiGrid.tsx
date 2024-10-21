import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Heart } from 'lucide-react'
import { Emoji } from '@/types/emoji'  // Adjust the import path as needed

interface EmojiGridProps {
  emojis: Emoji[]
}

const EmojiGrid = ({ emojis }: EmojiGridProps) => {
  const handleDownload = async (imageUrl: string, prompt: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `emoji-${prompt.replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {emojis.map((emoji) => (
        <Card key={emoji.id} className="relative group">
          <CardContent className="p-2">
            <div className="relative aspect-square">
              <Image
                src={emoji.url}
                alt={emoji.prompt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleDownload(emoji.url, emoji.prompt)}
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default EmojiGrid
