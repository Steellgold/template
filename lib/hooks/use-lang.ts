import { create } from "zustand"
import { persist } from "zustand/middleware"
import { ISOLang } from "../types/lang"

type LanguageState = {
  lang: ISOLang
  setLang: (lang: ISOLang) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (newLang) => {
        document.cookie = `language=${newLang};path=/;max-age=31536000`;
        set({ lang: newLang });
      },
    }),
    { name: "language-storage" }
  )
)