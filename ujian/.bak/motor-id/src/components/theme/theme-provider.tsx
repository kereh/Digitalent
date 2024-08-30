import { ThemeProvider as NextTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import {} from "lucide-react"

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextTheme {...props}>{children}</NextTheme>
}