"use client";

import { useState, useRef } from "react";
import { Share2, Copy, Heart, Check, Image as ImageIcon, User, Camera, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Quote } from "@/lib/quotes-data";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";
import Link from "next/link";

interface QuoteCardProps {
  quote: Quote;
}

const CATEGORY_BGS: Record<string, string> = {
  life: "https://picsum.photos/seed/nature-life/800/600",
  motivation: "https://picsum.photos/seed/mountain-success/800/600",
  love: "https://picsum.photos/seed/sunset-love/800/600",
  success: "https://picsum.photos/seed/city-tech/800/600",
  friendship: "https://picsum.photos/seed/coffee-friends/800/600",
  all: "https://picsum.photos/seed/abstract-art/800/600",
};

export function QuoteCard({ quote }: QuoteCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [copied, setCopied] = useState(false);
  const [isPersonalizing, setIsPersonalizing] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const bgImage = CATEGORY_BGS[quote.category] || CATEGORY_BGS.all;

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

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const makerUrl = `/maker?quote=${encodeURIComponent(quote.text)}${userName ? `&name=${encodeURIComponent(userName)}` : ''}${userPhoto ? `&photo=${encodeURIComponent(userPhoto)}` : ''}`;

  return (
    <Card className="group relative w-full glass hover:bg-white/[0.04] border-white/10 transition-all duration-700 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] rounded-[2.5rem] border-t-white/20">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={quote.category}
          className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
          data-ai-hint={`${quote.category} background`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 flex flex-col min-h-[320px]">
        {/* Header Section */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="h-1.5 w-8 rounded-full bg-primary/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">{quote.category}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleFavorite(quote.id)}
            className={cn(
              "h-10 w-10 rounded-2xl transition-all duration-500",
              isFavorite(quote.id) 
                ? "text-primary bg-primary/20 border border-primary/20 shadow-[0_0_20px_rgba(255,149,0,0.2)]" 
                : "text-muted-foreground hover:bg-white/10 glass border border-white/5"
            )}
          >
            <Heart 
              size={18} 
              fill={isFavorite(quote.id) ? "currentColor" : "none"} 
              className={cn("transition-transform duration-500", isFavorite(quote.id) && "scale-110")} 
            />
          </Button>
        </div>

        {/* Content Section */}
        <div className="flex-grow mb-8">
          <p className="kannada-text text-[1.5rem] sm:text-[1.75rem] font-bold leading-[1.4] text-white drop-shadow-lg">
            {quote.text}
          </p>
        </div>

        {/* Optional Personalization Section */}
        {isPersonalizing && (
          <div className="mb-8 p-5 glass rounded-3xl border-white/10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="h-14 w-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors group/photo flex-shrink-0"
              >
                {userPhoto ? (
                  <img src={userPhoto} alt="User" className="h-full w-full object-cover" />
                ) : (
                  <Camera size={20} className="text-muted-foreground group-hover/photo:text-primary transition-colors" />
                )}
              </button>
              <div className="flex-1 space-y-1.5 min-w-0">
                <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Profile Name</label>
                <Input 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your Name..."
                  className="bg-black/40 border-white/5 h-10 rounded-xl text-xs focus:ring-primary w-full"
                />
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handlePhotoUpload} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
        )}
        
        {/* Action Area */}
        <div className="flex flex-col gap-4 mt-auto">
          {/* Icons Row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className="h-11 w-11 rounded-2xl text-muted-foreground hover:bg-white/10 glass border border-white/5 transition-all active:scale-90"
              >
                {copied ? <Check size={20} className="text-primary" /> : <Copy size={20} />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleShare}
                className="h-11 w-11 rounded-2xl text-muted-foreground hover:bg-white/10 glass border border-white/5 transition-all active:scale-90"
              >
                <Share2 size={20} />
              </Button>
            </div>

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsPersonalizing(!isPersonalizing)}
              className={cn(
                "h-11 rounded-2xl px-4 text-[10px] font-black uppercase tracking-widest transition-all border",
                isPersonalizing ? "bg-primary text-black border-primary glow-primary" : "glass text-muted-foreground border-white/5 hover:text-white"
              )}
            >
              {isPersonalizing ? <X size={14} className="mr-2" /> : <User size={14} className="mr-2" />}
              Personalize
            </Button>
          </div>

          {/* Primary Action */}
          <Link href={makerUrl} className="w-full">
            <Button 
              className="w-full h-14 gradient-orange text-black font-black gap-3 rounded-2xl glow-primary border-none hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ImageIcon size={20} />
              <span className="text-[12px] uppercase tracking-[0.2em] font-black">Design Status</span>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
