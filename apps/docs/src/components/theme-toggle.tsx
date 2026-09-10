"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@liquid-glass/ui";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;
  const label = theme === "dark" ? "切换到浅色" : "切换到深色";

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={label} title={label}>
      <Icon className="h-4 w-4" />
    </Button>
  );
}

