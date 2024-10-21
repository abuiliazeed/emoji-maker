import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Heart } from 'lucide-react'
import { Emoji } from '@/types/emoji'

interface EmojiGridProps {
  emojis: Emoji[]
  isGenerating: boolean
}

const EmojiGrid = ({ emojis, isGenerating }: EmojiGridProps) => {
  const handleDownload = async (imageUrl: string) => {
    try {
      console.log('Downloading image:', imageUrl);
      const response = await fetch(`/api/download-image?url=${encodeURIComponent(imageUrl)}`);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'emoji.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isGenerating && (
        <Card className="relative group">
          <CardContent className="p-2">
            <div className="relative aspect-square flex items-center justify-center bg-gray-100 animate-pulse">
              <span className="text-gray-500">Generating...</span>
            </div>
          </CardContent>
        </Card>
      )}
      {emojis.map((emoji) => (
        <Card key={emoji.id} className="relative group">
          <CardContent className="p-2">
            <div className="relative aspect-square">
              <Image
                src={emoji.url}
                alt={emoji.prompt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="rounded-md object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDownload(emoji.url)}
                  className="mr-2"
                >
                  <Download className="h-6 w-6 text-white" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-6 w-6 text-white" />
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
