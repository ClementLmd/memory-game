"use client";
import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { CardType, GameTheme } from "../types";

// Helper function to prepare cards for a game
const prepareCards = (theme: GameTheme): CardType[] => {
  // Create pairs from the theme cards
  const cardPairs = [...theme.cards, ...theme.cards].map((card, index) => ({
    ...card,
    id: `${card.id}-${index}`, // Ensure unique IDs for pairs
    flipped: false,
    matched: false,
  }));

  // Shuffle the cards
  return cardPairs.sort(() => Math.random() - 0.5);
};

interface GameBoardProps {
  theme: GameTheme;
  onChangeTheme: () => void;
}

export default function GameBoard({ theme, onChangeTheme }: GameBoardProps) {
  const [cards, setCards] = useState<CardType[]>(() => prepareCards(theme));
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  // Create a ref for the game complete notification
  const gameCompleteRef = useRef<HTMLDivElement>(null);

  // Reset the game state
  const resetGame = () => {
    setFlippedCards([]);
    setMoves(0);
    setGameComplete(false);
    setCards(prepareCards(theme));
  };

  // Handle card click
  const handleCardClick = (id: string) => {
    // Don't allow flipping if two cards are already flipped or card is already matched
    const clickedCard = cards.find((card) => card.id === id);
    if (
      flippedCards.length === 2 ||
      clickedCard?.matched ||
      flippedCards.includes(id)
    )
      return;

    // Flip the card
    setFlippedCards([...flippedCards, id]);
    setCards(
      cards.map((card) => (card.id === id ? { ...card, flipped: true } : card))
    );
  };

  // Check for matches
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find((card) => card.id === first);
      const secondCard = cards.find((card) => card.id === second);

      // Increment moves
      setMoves((prevMoves) => prevMoves + 1);

      if (firstCard?.src === secondCard?.src) {
        // Match found
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === first || card.id === second
              ? { ...card, matched: true }
              : card
          )
        );
        setFlippedCards([]);
      } else {
        // No match, flip cards back after delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first || card.id === second
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  // Check if game is complete
  useEffect(() => {
    const allMatched = cards.every((card) => card.matched);
    if (allMatched && cards.length > 0 && !gameComplete) {
      setGameComplete(true);
    }
  }, [cards, gameComplete]);

  // Scroll to game complete notification when game is complete
  useEffect(() => {
    if (gameComplete && gameCompleteRef.current) {
      // Add a small delay to ensure the DOM has updated
      setTimeout(() => {
        gameCompleteRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    }
  }, [gameComplete]);

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <div className="mb-4 flex flex-col sm:flex-row justify-between w-full px-4">
        <div>
          <h2 className="font-bold text-xl">{theme.name}</h2>
          <p>Moves: {moves}</p>
        </div>
        <div className="mt-2 sm:mt-0 flex space-x-2">
          <button
            onClick={resetGame}
            className="px-4 py-1 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
          >
            Reset Game
          </button>
          <button
            onClick={onChangeTheme}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
          >
            Change Theme
          </button>
        </div>
      </div>

      {gameComplete && (
        <div
          ref={gameCompleteRef}
          className="mb-4 p-4 bg-green-100 border border-green-500 rounded-md text-center w-full max-w-md"
        >
          <p className="text-green-700 font-bold text-xl">Game Complete!</p>
          <p className="text-green-600">
            You completed the game in {moves} moves
          </p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4 w-full max-w-4xl px-2">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            src={card.src}
            alt={card.alt}
            flipped={card.flipped}
            matched={card.matched}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
