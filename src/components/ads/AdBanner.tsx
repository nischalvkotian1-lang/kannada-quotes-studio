
"use client";

import { Card } from "@/components/ui/card";

export function AdBanner() {
  return (
    <div className="w-full px-4 py-2">
      <Card className="h-14 w-full bg-secondary/50 border-dashed border-muted flex items-center justify-center overflow-hidden">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
          Advertisement Placeholder
        </span>
      </Card>
    </div>
  );
}
