"use client";

import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { THEMES } from "@/constants";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  const { setTheme, theme } = useTheme();

  useOnClickOutside(themeRef, () => {
    setIsThemeOpen(false);
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTheme = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  const handleChangeTheme = (name: string) => {
    setIsThemeOpen(false);
    setTheme(name.toLowerCase());
  };

  return (
    <div className="relative" ref={themeRef}>
      <Button onClick={handleTheme} variant={"ghost"} className="p-2">
        {theme === "dark" && isMounted ? (
          <MoonIcon size={22} />
        ) : (
          <SunIcon size={22} />
        )}
      </Button>

      <ul
        className={cn(
          "absolute top-0 right-0 flex flex-col rounded-md p-1 bg-primary/5 backdrop-blur-md border border-border duration-300",
          isThemeOpen
            ? "opacity-100 translate-y-10 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        )}
      >
        {THEMES.map((theme) => (
          <li
            key={theme.label}
            className="flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer hover:bg-primary/10"
            onClick={() => handleChangeTheme(theme.label)}
          >
            {<theme.Icon className="w-5 h-5" />}
            <span>{theme.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
