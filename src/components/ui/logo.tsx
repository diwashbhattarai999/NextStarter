import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface ILogoProps {
  className?: string;
}

const Logo = ({ className }: ILogoProps) => {
  return (
    <>
      <Link
        href="/"
        className={cn(
          "w-64 h-10 relative hidden min-[400px]:inline",
          className
        )}
      >
        <Image
          src="/DB-NextStarter.svg"
          alt="Logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link
        href="/"
        className={cn(
          "w-10 h-10 relative min-[400px]:hidden inline",
          className
        )}
      >
        <Image
          src="/favicon.png"
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
