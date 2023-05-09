import { useRouter } from "next/router"

import en from "./en"
import uk from "./uk"

const strings = {
  uk,
  en
}

export type Lang = keyof typeof strings

export const isValidLocale = (lang: string | undefined) => Object.keys(strings).includes(lang || "")

export const getLocale = (): Lang => {
  // eslint-disable-next-line
  const { locale, defaultLocale } = useRouter()

  if (isValidLocale(locale)) {
    return locale as Lang
  }
  return defaultLocale as Lang
}

export default strings
