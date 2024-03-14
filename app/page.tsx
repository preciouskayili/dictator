import Link from "next/link";
import { IconChevronDown, IconMoon, IconSun } from "@tabler/icons-react";
import { DictionaryData } from "@/types/dictionary";
import AudioPlayer from "@/components/audio-player";
import Book from "@/assets/book";
import { DM_Sans } from "next/font/google";
import SearchIcon from "@/assets/search";
import Search from "@/components/search";

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

        <Search />

        <div className="flex w-full justify-between items-center">
          <div>
            <h1 className="font-bold text-5xl">{data[0].word}</h1>
            <p className="text-purple-500 text-xl mt-2">
              {data[0].phonetics[0].text}
            </p>
          </div>

          <AudioPlayer url={data[0].phonetics[0].audio} />
        </div>
        {data.map((wordInfo, i) => (
          <div key={i}>
            {wordInfo.meanings.map((wordMeanings, i) => (
              <div key={i}>
                <p className="font-bold text-xl mt-4 mb-3">
                  {wordMeanings.partOfSpeech}
                </p>

                <div>
                  <p className="text-gray-600 mt-3 mb-2">Meaning</p>

                  <ul className="list-disc marker:text-purple-500">
                    {wordMeanings.definitions.map((definition, i) => (
                      <li key={i}>
                        {definition.definition}

                        {definition.example ? (
                          <p className="text-sm mt-2 mb-4 text-gray-500">
                            {`"${definition.example}"`}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap mt-2 mb-8">
                    {wordMeanings.synonyms.length ? (
                      <p className="text-gray-500 mr-3">Synonyms</p>
                    ) : null}
                    {wordMeanings.synonyms.map((synonym, i) => (
                      <Link
                        key={i}
                        href="/"
                        className="text-purple-500 mr-3 font-bold"
                      >
                        {synonym}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="mb-6">
          <hr className="w-full" />
          <div className="flex mt-2 text-xs text-gray-500 flex-wrap items-center space-x-2">
            <p className="text-sm">Source:</p>
            {data[0].sourceUrls.map((source, i) => (
              <Link key={i} href={source} target="_blank">
                {source}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
