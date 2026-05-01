"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Download, Layers, Type, Palette, ChevronLeft } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const PRESET_PALETTES = [
  { primary: "#FFFFFF", secondary: "#000000", accent: "#FF9500" },
  { primary: "#FF9500", secondary: "#000000", accent: "#FFFFFF" },
  { primary: "#FFD700", secondary: "#121212", accent: "#FF69B4" },
  { primary: "#E2725B", secondary: "#1A0F0E", accent: "#8D6E63" },
  { primary: "#00F2FE", secondary: "#050A30", accent: "#4FACFE" },
  { primary: "#A8E063", secondary: "#0A1F0A", accent: "#56AB2F" },
];

const PRESET_LAYOUTS = [
  "Center Bold",
  "Bottom Minimal",
  "Classic Top",
  "Serif Elegant",
  "Minimal Wide",
];

export default function StatusMakerPage() {
  const searchParams = useSearchParams();
  const initialQuote = searchParams.get("quote") || "ಬದುಕಿನ ಹಾದಿ ಅಷ್ಟು ಸುಲಭವಲ್ಲ, ಆದರೆ ಅಸಾಧ್ಯವೇನಲ್ಲ.";
  
  const [quote, setQuote] = useState(initialQuote);
  const [background, setBackground] = useState(PlaceHolderImages[0].imageUrl);
  const [colors, setColors] = useState(PRESET_PALETTES[0]);
  const [textLayout, setTextLayout] = useState(PRESET_LAYOUTS[0]);

  const canvasRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Design Exported",
      description: "Successfully saved to your library.",
    });
  };

  return (
    <div className="pb-36 page-transition">
      <header className="px-6 pt-10 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="glass h-10 w-10 rounded-xl">
              <ChevronLeft size={20} />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight">Studio Maker</h1>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Premium Designer</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="glass h-10 w-10 rounded-xl text-primary">
          <Palette size={20} />
        </Button>
      </header>

      <div className="px-6 space-y-8">
        {/* Preview Canvas */}
        <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] border border-white/10 group" ref={canvasRef}>
          <img 
            src={background} 
            alt="Status Background" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
          
          <div className={cn(
            "absolute inset-0 flex p-10 text-center",
            textLayout.includes("Bottom") ? "items-end pb-20" : 
            textLayout.includes("Top") ? "items-start pt-20" : "items-center"
          )}>
            <p className={cn(
              "kannada-text text-3xl leading-[1.4] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] w-full",
              textLayout.includes("Bold") ? "font-black" : "font-medium",
              textLayout.includes("Serif") ? "font-serif" : "font-sans"
            )}
            style={{ color: colors.primary }}>
              {quote}
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-dark px-4 py-1.5 rounded-full border border-white/5">
            <span className="text-[9px] text-white/40 font-black uppercase tracking-[0.3em]">Studio Creator</span>
          </div>
        </div>

        {/* Controls Container */}
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="glass p-6 rounded-[2.5rem] space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Quote Text</label>
              <Textarea 
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="kannada-text min-h-[120px] bg-black/40 border-white/5 text-xl font-bold rounded-3xl resize-none focus:ring-primary focus:border-primary/50"
                placeholder="Write something powerful..."
              />
            </div>
            
            <Button 
              onClick={handleDownload}
              className="w-full gradient-orange text-black font-black uppercase tracking-widest h-14 rounded-3xl glow-primary hover:scale-[1.02] transition-transform"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Status
            </Button>
          </div>

          {/* Background Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Premium Backgrounds</span>
              <Layers size={14} className="text-primary" />
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
              {PlaceHolderImages.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setBackground(img.imageUrl)}
                  className={cn(
                    "flex-shrink-0 w-24 h-24 rounded-[2rem] overflow-hidden border-2 transition-all duration-500 relative",
                    background === img.imageUrl ? "border-primary scale-110 shadow-2xl glow-primary" : "border-transparent opacity-40 hover:opacity-100"
                  )}
                >
                  <img src={img.imageUrl} alt={img.description} className="w-full h-full object-cover" />
                  {background === img.imageUrl && (
                    <div className="absolute inset-0 bg-primary/20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Color Presets */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Color Themes</span>
              <Palette size={14} className="text-primary" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PRESET_PALETTES.map((palette, i) => (
                <button
                  key={i}
                  onClick={() => setColors(palette)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-3xl border transition-all duration-300",
                    colors.primary === palette.primary ? "bg-primary/10 border-primary" : "glass border-white/5 hover:border-white/20"
                  )}
                >
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-black" style={{ background: palette.primary }} />
                    <div className="w-8 h-8 rounded-full border-2 border-black" style={{ background: palette.secondary }} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest">Set {i+1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Layouts */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Layout Styles</span>
              <Type size={14} className="text-primary" />
            </div>
            <div className="flex flex-wrap gap-2">
              {PRESET_LAYOUTS.map((layout, i) => (
                <button
                  key={i}
                  onClick={() => setTextLayout(layout)}
                  className={cn(
                    "px-5 py-3 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all duration-300",
                    textLayout === layout ? "bg-primary text-black border-primary glow-primary" : "glass border-white/5 text-muted-foreground"
                  )}
                >
                  {layout}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}