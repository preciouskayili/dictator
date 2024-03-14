"use client";

import Speaker from "@/assets/speaker";
import { useRef } from "react";

export default function AudioPlayer({ url }: { url: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (url: string) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  return (
    <button
      onClick={() => playSound(url)}
      className="h-14 w-14 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-500"
    >
      <Speaker height={24} width={24} />

      <audio ref={audioRef} className="hidden"></audio>
    </button>
  );
}
