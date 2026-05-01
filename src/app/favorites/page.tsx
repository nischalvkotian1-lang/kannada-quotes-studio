
"use client";

import { BottomNav } from "@/components/navigation/BottomNav";
import { AdBanner } from "@/components/ads/AdBanner";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { Heart, Sparkles } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { getQuoteById } from "@/lib/quotes-data";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  
  const favoriteQuotes = favorites
    .map(id => getQuoteById(id))
    .filter(q => q !== undefined);

  return (
    <div className="pb-28">
      <header className="px-6 pt-10 pb-6 flex items-center justify-between sticky top-0 bg-background/60 backdrop-blur-2xl z-20">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl gradient-orange flex items-center justify-center glow-primary">
            <Heart className="text-black" size={24} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter">
              MY <span className="text-primary">FAVORITES</span>
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Personal Collection</p>
          </div>
        </div>
      </header>

      <AdBanner />

      <div className="px-6 mt-6">
        {favoriteQuotes.length > 0 ? (
          <div className="space-y-8">
            {favoriteQuotes.map((quote) => (
              <div 
                key={quote!.id} 
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              >
                <QuoteCard quote={quote!} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center glass mx-6 rounded-[3rem] border-dashed border-white/5">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 animate-pulse">
              <Heart size={40} className="text-primary/30" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Your vault is empty</h3>
            <p className="text-xs text-muted-foreground max-w-[200px] mt-4 uppercase tracking-widest leading-loose">
              Save the quotes that move you to see them here.
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
