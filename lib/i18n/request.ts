import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { ISOLang, SupportedLangs } from "../types/lang";

const detectLanguage = (
  acceptLanguage: string | null,
  supportedLanguages: SupportedLangs = { en: "en" },
  defaultLang: ISOLang = "en"
): ISOLang => {
  if (!acceptLanguage) return defaultLang;
  
  const browserLang = acceptLanguage.split(",")[0].toLowerCase();
  
  const exactMatch = Object.entries(supportedLanguages).find(([key]) => browserLang === key || browserLang.startsWith(key + "-"));
  if (exactMatch) return exactMatch[1];
  
  const partialMatch = Object.entries(supportedLanguages).find(([key]) => browserLang.startsWith(key));
  if (partialMatch) return partialMatch[1];
  
  return defaultLang;
};

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  
  const supportedLanguages: SupportedLangs = {
    en: "en",
    fr: "fr",
  };

  const store = await cookieStore;

  const storedLanguage = store.get("language")?.value;
  const fallbackLocale = store.get("locale")?.value;
  const browserLocale = detectLanguage(
    store.get("accept-language")?.value ?? null,
    supportedLanguages,
    "en"
  );

  const locale = (storedLanguage || fallbackLocale || browserLocale) as ISOLang;
 
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});