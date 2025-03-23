"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, ChevronDown, Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useTranslations } from "next-intl"
import { useLanguageStore } from "@/lib/hooks/use-lang"
import { useRouter } from "next/navigation"
import { Skeleton } from "./ui/skeleton"

type Language = {
  code: string
  name: string
}

const languages: Language[] = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" }
]

export const ThemeLanguageSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const { lang, setLang } = useLanguageStore();

  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [mounted, setMounted] = useState(false)
  
  const t = useTranslations("LanguageSelector");
  const router = useRouter();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <Skeleton className="h-9 w-32" />

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex items-center bg-background rounded-md border border-input overflow-hidden"> {/* rounded-full */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-l-md rounded-r-none h-9 w-9 border-r border-border"
      >
        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        <span className="sr-only">Toggle theme</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="rounded-r-md rounded-l-none h-9 px-3 flex items-center gap-1 font-normal">
            <Globe className="h-3.5 w-3.5 mr-1 opacity-70" />
            {/* {currentLanguage.name} */}
            <ChevronDown className="h-3.5 w-3.5 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => {
                setCurrentLanguage(lang);
                setLang(lang.code as any);
                router.refresh();
              }}
              className={currentLanguage.code === lang.code ? "bg-accent" : ""}
            >
              {t(`Options.${lang.code}`)}
              {lang.code === currentLanguage.code && <Check className="h-4 w-4 ml-auto" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

