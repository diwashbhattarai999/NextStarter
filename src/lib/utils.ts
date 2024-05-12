import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { env } from "@/lib/env";

// Function to merge Tailwind CSS classes with custom classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get the base URL
export const getBaseUrl = () => {
  if (env.NEXT_PUBLIC_BASE_URL) {
    return env.NEXT_PUBLIC_BASE_URL;
  }

  return "http://localhost:3000";
};
