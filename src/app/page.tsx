
"use client";

import { useState } from "react";
import { BottomNav } from "@/components/navigation/BottomNav";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { AdBanner } from "@/components/ads/AdBanner";
import { quotes, categories } from "@/lib/quotes-data";
import { cn } from "@/lib/utils";
import { Search, Sparkles, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  const filteredQuotes = selectedCategory === "all" 
    ? quotes 
    : quotes.filter(q => q.category === selectedCategory);

  const handleShareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Kannada Quotes Studio',
          text: 'Check out this amazing app to create beautiful Kannada status quotes!',
          url: window.location.origin,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      toast({
        title: "Link Copied!",
        description: "App link copied to clipboard.",
      });
    }
  };

  return (
    <div className="pb-32 page-transition">
      {/* Header */}
      <header className="px-6 pt-10 pb-6 sticky top-0 bg-background/60 backdrop-blur-2xl z-20 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl gradient-orange flex items-center justify-center glow-primary">
              <Sparkles className="text-black" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter">
                KANNADA <span className="text-primary">STUDIO</span>
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Premium Collection</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleShareApp}
              className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 active:scale-95"
            >
              <Share2 size={20} />
            </button>
            <button className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 active:scale-95">
              <Search size={22} />
            </button>
          </div>
        </div>

        {/* Category horizontal scroll */}
        <div className="flex overflow-x-auto gap-3 no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-500 border",
                selectedCategory === cat.id 
                  ? "bg-primary border-primary text-black glow-primary scale-105" 
                  : "glass border-white/10 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </header>

      <AdBanner />

      {/* Quotes list */}
      <div className="px-6 space-y-8 mt-6">
        {filteredQuotes.map((quote, idx) => (
          <div 
            key={quote.id} 
            className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <QuoteCard quote={quote} />
          </div>
        ))}
        
        {filteredQuotes.length === 0 && (
          <div className="py-24 text-center glass rounded-[2.5rem] border-dashed border-white/5 mx-6">
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">No quotes found</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
