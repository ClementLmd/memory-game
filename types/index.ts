// Define types for our theme system
export type CardImage = {
  id: string;
  src: string;
  alt: string;
};

export type GameTheme = {
  id: string;
  name: string;
  description: string;
  thumbnailSrc: string;
  cards: CardImage[];
};

export type CardType = {
  id: string;
  src: string;
  alt: string;
  flipped: boolean;
  matched: boolean;
};
