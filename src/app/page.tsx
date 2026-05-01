
"use client";

import { useState } from "react";
import { BottomNav } from "@/components/navigation/BottomNav";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { AdBanner } from "@/components/ads/AdBanner";
import { quotes, categories } from "@/lib/quotes-data";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredQuotes = selectedCategory === "all" 
    ? quotes 
    : quotes.filter(q => q.category === selectedCategory);

  return (
    <div className="pb-28">
      {/* Header */}
      <header className="px-6 pt-8 pb-4 sticky top-0 bg-background/80 backdrop-blur-lg z-20 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold font-headline tracking-tight">
              Kannada <span className="text-primary">Studio</span>
            </h1>
            <p className="text-xs text-muted-foreground">Express yourself in Kannada</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <Search size={20} />
          </div>
        </div>

        {/* Category horizontal scroll */}
        <div className="flex overflow-x-auto gap-2 no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border",
                selectedCategory === cat.id 
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "bg-secondary/50 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </header>

      <AdBanner />

      {/* Quotes list */}
      <div className="px-6 space-y-6 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
        
        {filteredQuotes.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No quotes found for this category.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
