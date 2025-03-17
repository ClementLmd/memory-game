import Image from "next/image";

interface CardProps {
  id: string;
  src: string;
  alt: string;
  flipped: boolean;
  matched: boolean;
  onClick: () => void;
}

export default function Card({
  id,
  src,
  alt,
  flipped,
  matched,
  onClick,
}: CardProps) {
  return (
    <div
      className={`cursor-pointer aspect-square w-full max-w-[180px] mx-auto rounded-md flex items-center justify-center
                 ${flipped || matched ? "bg-gray-800" : "bg-gray-900"} 
                 ${matched ? "border-2 border-green-500" : ""}`}
      onClick={onClick}
    >
      {flipped || matched ? (
        <div className="relative w-[90%] h-[90%]">
          <Image
            id={id}
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 180px"
            className="object-cover"
          />
        </div>
      ) : (
        <span className="text-3xl text-white">?</span>
      )}
    </div>
  );
}
