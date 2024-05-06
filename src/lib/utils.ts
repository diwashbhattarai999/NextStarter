import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to merge Tailwind CSS classes with custom classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get the base URL
export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  return "http://localhost:3000";
};
