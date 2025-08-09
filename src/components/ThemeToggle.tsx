import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function getStoredTheme() {
  return (localStorage.getItem("theme") as "light" | "dark" | null) ?? null;
}

function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getStoredTheme() ?? getPreferredTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="relative"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun
        className={
          "h-5 w-5 transition-all duration-300 absolute " +
          (isDark ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100")
        }
      />
      <Moon
        className={
          "h-5 w-5 transition-all duration-300 " +
          (isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0")
        }
      />
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  );
};

export default ThemeToggle;
