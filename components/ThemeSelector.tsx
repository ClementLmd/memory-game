import { useState } from "react";
import themes from "../data/themes";
import { GameTheme } from "../types";

interface ThemeSelectorProps {
  onSelectTheme: (theme: GameTheme) => void;
}

export default function ThemeSelector({ onSelectTheme }: ThemeSelectorProps) {
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);

  const handleSelectTheme = (themeId: string) => {
    setSelectedThemeId(themeId);
  };

  const handleStartGame = () => {
    if (selectedThemeId) {
      const selectedTheme = themes.find(
        (theme) => theme.id === selectedThemeId
      );
      if (selectedTheme) {
        onSelectTheme(selectedTheme);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        Choose Your Memory Game Theme
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedThemeId === theme.id
                ? "border-blue-500 bg-blue-50 scale-105"
                : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => handleSelectTheme(theme.id)}
          >
            <div className="aspect-video relative mb-2 overflow-hidden rounded">
              <img
                src={theme.thumbnailSrc}
                alt={theme.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">{theme.name}</h3>
            <p className="text-sm text-gray-600">{theme.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleStartGame}
          disabled={!selectedThemeId}
          className={`px-6 py-2 rounded-full font-medium cursor-pointer ${
            selectedThemeId
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
