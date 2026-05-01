
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

export function QuoteCard({ quote }: QuoteCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [copied, setCopied] = useState(false);
  const [isPersonalizing, setIsPersonalizing] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    <Card className="group relative p-8 glass hover:bg-white/[0.04] border-white/10 transition-all duration-700 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] rounded-[3rem] border-t-white/20">
      {/* Premium Mesh Gradient Accents */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/15 blur-[100px] rounded-full transition-opacity duration-700 group-hover:bg-primary/25" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full opacity-60" />
      
      {/* Subtle Label */}
      <div className="mb-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="h-1 w-8 rounded-full bg-primary/40" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/70">{quote.category}</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsPersonalizing(!isPersonalizing)}
          className={cn(
            "h-8 rounded-full px-4 text-[9px] font-black uppercase tracking-widest transition-all",
            isPersonalizing ? "bg-primary text-black" : "glass text-muted-foreground"
          )}
        >
          {isPersonalizing ? <X size={12} className="mr-1" /> : <User size={12} className="mr-1" />}
          Personalize
        </Button>
      </div>

      <p className="kannada-text text-[1.65rem] font-bold leading-[1.45] mb-12 text-foreground/95 relative z-10 tracking-tight drop-shadow-sm">
        {quote.text}
      </p>

      {/* Optional Personalization Section */}
      {isPersonalizing && (
        <div className="mb-8 p-6 glass rounded-[2rem] border-white/5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500 relative z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="h-16 w-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors group/photo"
            >
              {userPhoto ? (
                <img src={userPhoto} alt="User" className="h-full w-full object-cover" />
              ) : (
                <Camera size={24} className="text-muted-foreground group-hover/photo:text-primary transition-colors" />
              )}
            </button>
            <div className="flex-1 space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name (Optional)</label>
              <Input 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ex: Rakesh Gowda"
                className="bg-black/20 border-white/5 h-10 rounded-xl text-sm focus:ring-primary"
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
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleFavorite(quote.id)}
            className={cn(
              "h-12 w-12 rounded-2xl transition-all duration-500",
              isFavorite(quote.id) 
                ? "text-primary bg-primary/20 shadow-[0_0_25px_rgba(255,149,0,0.3)] border border-primary/20" 
                : "text-muted-foreground hover:bg-white/10 glass border border-white/5"
            )}
          >
            <Heart 
              size={22} 
              fill={isFavorite(quote.id) ? "currentColor" : "none"} 
              className={cn("transition-transform duration-500", isFavorite(quote.id) && "scale-110 animate-pulse")} 
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

        <Link href={makerUrl}>
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
