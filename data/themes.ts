import { GameTheme } from "../types";

// Define the themes data
const themes: GameTheme[] = [
  {
    id: "lotr",
    name: "Lord of the Rings",
    description: "Test your memory with characters from Middle Earth",
    thumbnailSrc: "/images/lotr/lotr.jpeg",
    cards: [
      { id: "1", src: "/images/lotr/frodon.webp", alt: "Frodo" },
      { id: "2", src: "/images/lotr/gandalf.jpeg", alt: "Gandalf" },
      { id: "3", src: "/images/lotr/aragorn.jpeg", alt: "Aragorn" },
      { id: "4", src: "/images/lotr/sam.jpeg", alt: "Sam" },
      { id: "5", src: "/images/lotr/gollum.jpeg", alt: "Gollum" },
      { id: "6", src: "/images/lotr/sauron.jpg", alt: "Sauron" },
    ],
  },
  {
    id: "starwars",
    name: "Star Wars",
    description: "May the Force be with your memory",
    thumbnailSrc: "/images/starwars/starwars.png",
    cards: [
      { id: "1", src: "/images/starwars/anakin.jpeg", alt: "Anakin Skywalker" },
      { id: "2", src: "/images/starwars/vador.jpeg", alt: "Darth Vader" },
      {
        id: "3",
        src: "/images/starwars/palpatine.jpeg",
        alt: "Emperor Palpatine",
      },
      { id: "4", src: "/images/starwars/yoda.jpeg", alt: "Yoda" },
      { id: "5", src: "/images/starwars/quigon.jpeg", alt: "Qui-Gon Jinn" },
      { id: "6", src: "/images/starwars/obiwan.jpeg", alt: "Obi-Wan Kenobi" },
    ],
  },
  {
    id: "got",
    name: "Game of Thrones",
    description: "Winter is coming... test your memory",
    thumbnailSrc: "/images/got/got.jpeg",
    cards: [
      { id: "1", src: "/images/got/jonsnow.jpeg", alt: "Jon Snow" },
      { id: "2", src: "/images/got/daenerys.jpeg", alt: "Daenerys Targaryen" },
      { id: "3", src: "/images/got/tyrion.jpeg", alt: "Tyrion Lannister" },
      { id: "4", src: "/images/got/arya.jpeg", alt: "Arya Stark" },
      { id: "5", src: "/images/got/sansa.jpeg", alt: "Sansa Stark" },
      { id: "6", src: "/images/got/bran.jpeg", alt: "Bran Stark" },
    ],
  },
  {
    id: "wow",
    name: "World of Warcraft",
    description: "For the Horde! (or Alliance)",
    thumbnailSrc: "/images/wow/wow.jpeg",
    cards: [
      { id: "1", src: "/images/wow/thrall.jpeg", alt: "Thrall" },
      { id: "2", src: "/images/wow/sylvanas.jpeg", alt: "Sylvanas" },
      { id: "3", src: "/images/wow/arthas.jpeg", alt: "Arthas" },
      { id: "4", src: "/images/wow/illidan.jpeg", alt: "Illidan" },
      { id: "5", src: "/images/wow/guldan.jpeg", alt: "Gul'dan" },
      { id: "6", src: "/images/wow/anduin.jpeg", alt: "Anduin" },
    ],
  },
];

export default themes;
