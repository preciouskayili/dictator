"use client";

import { IconVolume } from "@tabler/icons-react";
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
      <IconVolume />

      <audio className="hidden" ref={audioRef}></audio>
    </button>
  );
}
