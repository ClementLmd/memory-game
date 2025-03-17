"use client";
import { useState, useEffect } from "react";
import ThemeSelector from "./ThemeSelector";
import { GameTheme } from "../types";
import GameBoard from "./GameBoard";

export default function Game() {
  const [selectedTheme, setSelectedTheme] = useState<GameTheme | null>(null);

  // Initialize game with selected theme
  const startGame = (theme: GameTheme) => {
    setSelectedTheme(theme);
    // Scroll to top when game starts
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Also scroll to top when changing themes
  useEffect(() => {
    if (selectedTheme === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedTheme]);

  // If no theme is selected, show the theme selector
  if (!selectedTheme) {
    return <ThemeSelector onSelectTheme={startGame} />;
  }

  return (
    <GameBoard
      theme={selectedTheme}
      onChangeTheme={() => setSelectedTheme(null)}
    />
  );
}
