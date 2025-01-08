"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Component } from "@/lib/types"
import { ThemeProviderProps } from "next-themes"

export const ThemeProvider: Component<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}