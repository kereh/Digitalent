import { Button } from "~/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <Button
      variant="ghost"
      size="icon"
      // onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <Sun className="block dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  );
}
