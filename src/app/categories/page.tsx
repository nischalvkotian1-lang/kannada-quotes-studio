
"use client";

import { BottomNav } from "@/components/navigation/BottomNav";
import { categories } from "@/lib/quotes-data";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AdBanner } from "@/components/ads/AdBanner";

export default function CategoriesPage() {
  return (
    <div className="pb-28">
      <header className="px-6 pt-8 pb-6">
        <h1 className="text-2xl font-bold font-headline">Categories</h1>
        <p className="text-sm text-muted-foreground">Find quotes by theme</p>
      </header>

      <AdBanner />

      <div className="px-6 grid grid-cols-1 gap-4 mt-4 animate-in fade-in duration-500">
        {categories.filter(c => c.id !== 'all').map((category) => (
          <Link key={category.id} href={`/?cat=${category.id}`}>
            <Card className="p-4 bg-card hover:bg-secondary/30 border-border/50 flex items-center justify-between group transition-all">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{category.label}</h3>
                  <p className="text-xs text-muted-foreground">Explore unique quotes</p>
                </div>
              </div>
              <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" />
            </Card>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
