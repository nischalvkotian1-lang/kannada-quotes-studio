
"use client";

import { BottomNav } from "@/components/navigation/BottomNav";
import { AdBanner } from "@/components/ads/AdBanner";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  // In a real app, this would use local storage or a database
  // Showing a placeholder empty state
  const favoriteQuotes: any[] = [];

  return (
    <div className="pb-28">
      <header className="px-6 pt-8 pb-6">
        <h1 className="text-2xl font-bold font-headline">My Favorites</h1>
        <p className="text-sm text-muted-foreground">Your collection of loved quotes</p>
      </header>

      <AdBanner />

      <div className="px-6 mt-8">
        {favoriteQuotes.length > 0 ? (
          <div className="space-y-6">
            {favoriteQuotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} isFavorite />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center mb-6">
              <Heart size={32} className="text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-lg font-bold">No Favorites Yet</h3>
            <p className="text-sm text-muted-foreground max-w-[240px] mt-2">
              Start adding quotes you love to see them appear here!
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
