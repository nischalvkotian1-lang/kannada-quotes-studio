"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Download, Layers, Type, Palette } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Static design presets replacing AI suggestions
const PRESET_PALETTES = [
  { primary: "#FF9500", secondary: "#2C2A27", accent: "#AD1F1F" },
  { primary: "#FFFFFF", secondary: "#121212", accent: "#3B82F6" },
  { primary: "#FFD700", secondary: "#4A4A4A", accent: "#FF69B4" },
  { primary: "#E2725B", secondary: "#3E2723", accent: "#8D6E63" },
  { primary: "#00F2FE", secondary: "#1A237E", accent: "#4FACFE" },
  { primary: "#A8E063", secondary: "#1B5E20", accent: "#56AB2F" },
];

const PRESET_LAYOUTS = [
  "Modern Centered",
  "Bold Focus",
  "Classic Serif (Light)",
  "Minimalist Bottom",
  "Elegant Top",
];

export default function StatusMakerPage() {
  const searchParams = useSearchParams();
  const initialQuote = searchParams.get("quote") || "ಬದುಕಿನ ಹಾದಿ ಅಷ್ಟು ಸುಲಭವಲ್ಲ, ಆದರೆ ಅಸಾಧ್ಯವೇನಲ್ಲ.";
  
  const [quote, setQuote] = useState(initialQuote);
  
  // Design state
  const [background, setBackground] = useState(PlaceHolderImages[0].imageUrl);
  const [colors, setColors] = useState(PRESET_PALETTES[0]);
  const [textLayout, setTextLayout] = useState(PRESET_LAYOUTS[0]);

  const canvasRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Saved!",
      description: "Status image has been saved to your gallery.",
    });
  };

  return (
    <div className="pb-28">
      <header className="px-6 pt-8 pb-6">
        <h1 className="text-2xl font-bold font-headline">Status Maker</h1>
        <p className="text-sm text-muted-foreground">Customize your visual quote</p>
      </header>

      <div className="px-6 space-y-6">
        {/* Preview Canvas */}
        <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl group" ref={canvasRef}>
          <img 
            src={background} 
            alt="Status Background" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          
          <div className={cn(
            "absolute inset-0 flex p-8 text-center",
            textLayout.includes("Bottom") ? "items-end pb-16" : 
            textLayout.includes("Top") ? "items-start pt-16" : "items-center"
          )}>
            <p className={cn(
              "kannada-text text-2xl leading-tight drop-shadow-2xl w-full",
              textLayout.includes("Light") ? "font-light" : "font-bold",
              textLayout.includes("Serif") ? "font-serif" : "font-sans"
            )}
            style={{ color: colors.primary }}>
              {quote}
            </p>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="text-[10px] text-white/60 font-medium uppercase tracking-tighter">Kannada Quote Studio</span>
          </div>
        </div>

        {/* Input */}
        <div className="space-y-4">
          <Textarea 
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="kannada-text min-h-[100px] bg-card border-border/50 text-lg rounded-2xl resize-none"
            placeholder="Type your Kannada quote here..."
          />
          
          <Button 
            onClick={handleDownload}
            className="w-full gradient-orange rounded-full font-bold h-12"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Status Image
          </Button>
        </div>

        {/* Customization Options */}
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
              <Layers size={14} className="text-primary" />
              <span>Backgrounds</span>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {PlaceHolderImages.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setBackground(img.imageUrl)}
                  className={cn(
                    "flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                    background === img.imageUrl ? "border-primary scale-105 shadow-lg" : "border-transparent opacity-60"
                  )}
                >
                  <img src={img.imageUrl} alt={img.description} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
              <Palette size={14} className="text-primary" />
              <span>Color Palettes</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {PRESET_PALETTES.map((palette, i) => (
                <button
                  key={i}
                  onClick={() => setColors(palette)}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-xl border transition-all",
                    colors.primary === palette.primary ? "bg-primary/10 border-primary" : "bg-card border-border/50"
                  )}
                >
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full border border-black/10" style={{ background: palette.primary }} />
                    <div className="w-6 h-6 rounded-full border border-black/10" style={{ background: palette.secondary }} />
                  </div>
                  <span className="text-[10px] font-medium truncate">Theme {i+1}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
              <Type size={14} className="text-primary" />
              <span>Layout Styles</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {PRESET_LAYOUTS.map((layout, i) => (
                <button
                  key={i}
                  onClick={() => setTextLayout(layout)}
                  className={cn(
                    "w-full text-left p-3 rounded-xl border text-xs transition-all",
                    textLayout === layout ? "bg-primary/10 border-primary text-primary" : "bg-card border-border/50 text-muted-foreground"
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
