"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import type { ReactElement } from "react";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps): ReactElement => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};