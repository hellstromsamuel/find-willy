"use client";

import { useEffect, useState } from "react";
import BottomControls from "./components/BottomControls";
import Image from "next/image";

export default function Home() {
  const peopleSrc = "/samuel.jpg";
  const willyImgSrc = "/yngve.jpg";

  const [lastSelected, setLastSelected] = useState(0);
  const [lastCorrect, setLastCorrect] = useState(0);

  const [numberOfPeople, setNumberOfPeople] = useState(200);
  const [imageSize, setImageSize] = useState(60);
  const [willyIndex, setWillyIndex] = useState(
    Math.floor(Math.random() * numberOfPeople)
  );

  useEffect(() => {
    newWilly();
  }, [numberOfPeople]);

  function newWilly() {
    setWillyIndex(Math.floor(Math.random() * numberOfPeople));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <main className="pt-20 pb-40 px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {Array.from({ length: numberOfPeople }).map((_, index) => (
            <button
              className={cn(
                "rounded-full border-[5px] p-1 transition hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
              )}
              onClick={() => {
                if (index === willyIndex) {
                  newWilly();
                  setLastCorrect(index);
                }
                setLastSelected(index);
              }}
            >
              <Image
                key={index}
                src={index === willyIndex ? willyImgSrc : peopleSrc}
                alt="willy"
                className="object-cover rounded-full"
                width={imageSize}
                height={imageSize}
              />
            </button>
          ))}
        </div>

        <BottomControls
          numberOfPeople={numberOfPeople}
          imageSize={imageSize}
          setNumberOfPeople={setNumberOfPeople}
          setImageSize={setImageSize}
        />
      </main>
    </div>
  );
}
