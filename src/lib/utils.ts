import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export function formatDateRange(
  startDate: string,
  endDate: string | null,
  current?: boolean
): string {
  const start = formatDate(`${startDate}-01`);
  if (current || !endDate) {
    return `${start} — Present`;
  }
  return `${start} — ${formatDate(`${endDate}-01`)}`;
}
