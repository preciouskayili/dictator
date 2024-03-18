import Link from "next/link";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { DictionaryData } from "@/types/dictionary";
import AudioPlayer from "@/components/audio-player";
import { DM_Sans } from "next/font/google";
import Search from "@/components/search";
import { Suspense } from "react";
import Main from "@/components/main";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "700" });

async function findWord(word: string): Promise<DictionaryData> {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const data = await fetch(url);
  return data.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    word?: string;
  };
}) {
  const data = await findWord(searchParams?.word || "welcome");

  return (
    <>
      <main className="max-w-xl mx-auto">
        <nav className="flex justify-between mt-4 items-center">
          <Link
            className={`${dmSans.className} text-purple-500 font-extrabold text-xl`}
            href="/"
          >
            dictionary
          </Link>

          <div className="flex space-x-2">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="light"
              />
              <IconMoon className="swap-off text-gray-500" />
              <IconSun className="swap-on" color="#FFD700" />
            </label>
          </div>
        </nav>

        <Main details={data} />
      </main>
    </>
  );
}
