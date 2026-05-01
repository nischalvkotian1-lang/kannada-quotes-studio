
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
      description: "Quote copied to clipboard.",
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
        console.error("Error sharing:", err);
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
    <Card className="group p-6 bg-card hover:bg-card/90 border-border/50 shadow-lg transition-all duration-300 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0 pointer-events-none group-hover:bg-primary/10 transition-colors" />
      
      <p className="kannada-text text-xl font-bold leading-relaxed mb-6 text-foreground/90 z-10 relative">
        "{quote.text}"
      </p>
      
      <div className="flex items-center justify-between z-10 relative">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFavorite}
            className={cn(
              "h-9 w-9 rounded-full transition-all duration-300",
              isFavorite ? "text-accent bg-accent/10 hover:bg-accent/20" : "text-muted-foreground hover:bg-secondary"
            )}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-9 w-9 rounded-full text-muted-foreground hover:bg-secondary"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="h-9 w-9 rounded-full text-muted-foreground hover:bg-secondary"
          >
            <Share2 size={18} />
          </Button>
        </div>

        <Link href={`/maker?quote=${encodeURIComponent(quote.text)}`}>
          <Button size="sm" variant="outline" className="h-9 border-primary/20 hover:border-primary/50 text-primary hover:bg-primary/5 gap-2 rounded-full px-4">
            <ImageIcon size={14} />
            <span className="text-xs font-semibold">Status Maker</span>
          </Button>
        </Link>
      </div>
    </Card>
  );
}
