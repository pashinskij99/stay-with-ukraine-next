import { Lang } from "@/locales";

export type LinkType = {
  name: string;
  path: string;
  id: string;
};

export const flags: Record<Lang, string> = {
  en: "EN",
  uk: "UK"
}