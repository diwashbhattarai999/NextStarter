"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface ILogoProps {
  className?: string;
}

const Logo = ({ className }: ILogoProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  let imageSrc = "/logo-transparent-white.svg";
  let smImageSrc = "/logo-transparent-white.svg";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    switch (resolvedTheme) {
      case "light":
        imageSrc = "/logo-transparent-black.svg";
        smImageSrc = "/favicon-black.svg";
        break;
      case "dark":
        imageSrc = "/logo-transparent-white.svg";
        smImageSrc = "/favicon-white.svg";
        break;
      default:
        imageSrc = "/logo-transparent-white.svg";
        smImageSrc = "/favicon-white.svg";
        break;
    }
  }

  return (
    <>
      <Link
        href="/"
        className={cn(
          "w-52 h-12 relative hidden min-[400px]:inline",
          className
        )}
        prefetch
      >
        <Image
          src={imageSrc}
          alt="Logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link
        href="/"
        className={cn("w-12 h-8 relative min-[400px]:hidden inline", className)}
        prefetch
      >
        <Image
          src={smImageSrc}
          alt="Logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    </>
  );
};

export default Logo;
