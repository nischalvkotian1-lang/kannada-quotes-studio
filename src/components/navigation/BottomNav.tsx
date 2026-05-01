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
    <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6">
      <div className="max-w-md w-full glass rounded-[2rem] shadow-2xl flex items-center justify-around py-4 px-4 border border-white/10">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex flex-col items-center gap-1.5 transition-all duration-300 relative group",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "p-2.5 rounded-2xl transition-all duration-500 relative overflow-hidden",
                isActive ? "bg-primary/15 glow-primary" : "group-hover:bg-white/5"
              )}>
                <Icon size={22} className={cn("transition-transform duration-500", isActive && "scale-110")} />
                {isActive && (
                  <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-bold tracking-wide uppercase transition-all duration-300",
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}