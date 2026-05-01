"use client";

import { useState } from "react";
import { Share2, Copy, Heart, Check, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Quote } from "@/lib/quotes-data";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface QuoteCardProps {
  quote: Quote;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function QuoteCard({ quote, isFavorite: initialFavorite, onToggleFavorite }: QuoteCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite || false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(quote.text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Ready to paste in your status.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Kannada Quote',
          text: quote.text,
          url: window.location.href,
        });
      } catch (err) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite?.(quote.id);
  };

  return (
    <Card className="group relative p-8 glass hover:bg-white/[0.03] border-white/10 transition-all duration-500 overflow-hidden shadow-xl rounded-[2.5rem]">
      {/* Accent glow on hover */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <p className="kannada-text text-2xl font-bold leading-[1.6] mb-8 text-foreground/95 relative z-10">
        {quote.text}
      </p>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFavorite}
            className={cn(
              "h-10 w-10 rounded-full transition-all duration-300",
              isFavorite ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-white/5"
            )}
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-10 w-10 rounded-full text-muted-foreground hover:bg-white/5"
          >
            {copied ? <Check size={20} className="text-primary" /> : <Copy size={20} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="h-10 w-10 rounded-full text-muted-foreground hover:bg-white/5"
          >
            <Share2 size={20} />
          </Button>
        </div>

        <Link href={`/maker?quote=${encodeURIComponent(quote.text)}`}>
          <Button 
            size="sm" 
            className="h-10 gradient-orange text-black font-bold gap-2 rounded-2xl px-5 glow-primary border-none hover:scale-105 transition-transform"
          >
            <ImageIcon size={16} />
            <span className="text-xs uppercase tracking-wider">Maker</span>
          </Button>
        </Link>
      </div>
    </Card>
  );
}