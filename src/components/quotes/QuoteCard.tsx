
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
    <Card className="group relative p-8 glass hover:bg-white/[0.04] border-white/10 transition-all duration-700 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] rounded-[3rem] border-t-white/20">
      {/* Premium Mesh Gradient Accents */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/15 blur-[100px] rounded-full transition-opacity duration-700 group-hover:bg-primary/25" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full opacity-60" />
      
      {/* Subtle Label */}
      <div className="mb-6 flex items-center gap-2 relative z-10">
        <div className="h-1 w-8 rounded-full bg-primary/40" />
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/70">{quote.category}</span>
      </div>

      <p className="kannada-text text-[1.65rem] font-bold leading-[1.45] mb-12 text-foreground/95 relative z-10 tracking-tight drop-shadow-sm">
        {quote.text}
      </p>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFavorite}
            className={cn(
              "h-12 w-12 rounded-2xl transition-all duration-500",
              isFavorite 
                ? "text-primary bg-primary/20 shadow-[0_0_25px_rgba(255,149,0,0.3)] border border-primary/20" 
                : "text-muted-foreground hover:bg-white/10 glass border border-white/5"
            )}
          >
            <Heart 
              size={22} 
              fill={isFavorite ? "currentColor" : "none"} 
              className={cn("transition-transform duration-500", isFavorite && "scale-110 animate-pulse")} 
            />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-12 w-12 rounded-2xl text-muted-foreground hover:bg-white/10 glass border border-white/5 transition-all active:scale-90"
          >
            {copied ? <Check size={22} className="text-primary" /> : <Copy size={22} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="h-12 w-12 rounded-2xl text-muted-foreground hover:bg-white/10 glass border border-white/5 transition-all active:scale-90"
          >
            <Share2 size={22} />
          </Button>
        </div>

        <Link href={`/maker?quote=${encodeURIComponent(quote.text)}`}>
          <Button 
            size="lg" 
            className="h-12 gradient-orange text-black font-black gap-2 rounded-2xl px-6 glow-primary border-none hover:scale-[1.05] active:scale-[0.95] transition-all shadow-xl"
          >
            <ImageIcon size={18} />
            <span className="text-[10px] uppercase tracking-[0.15em] font-black">Design</span>
          </Button>
        </Link>
      </div>
    </Card>
  );
}
