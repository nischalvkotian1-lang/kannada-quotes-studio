
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Heart, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Categories", icon: Layers, path: "/categories" },
  { label: "Maker", icon: Palette, path: "/maker" },
  { label: "Favorites", icon: Heart, path: "/favorites" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4">
      <div className="max-w-md w-full bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex items-center justify-around py-3 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex flex-col items-center gap-1 transition-all duration-300 relative group",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "p-2 rounded-xl transition-all duration-300",
                isActive ? "bg-primary/10" : "group-hover:bg-secondary"
              )}>
                <Icon size={20} className={cn("transition-transform", isActive && "scale-110")} />
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
