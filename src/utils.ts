import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Source } from "./components/Timeline"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSourceType(link: string): Source | undefined {
  if (link.startsWith("https://x.com")) return "twitter"
  if (link.startsWith("https://www.tiktok.com")) return "tiktok"
  if (link.startsWith("https://instagram.com")) return "instagram"
}
