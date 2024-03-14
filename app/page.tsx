import Link from "next/link";
import {
  IconBook2,
  IconChevronDown,
  IconSearch,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { DictionaryData } from "@/types/dictionary";
import AudioPlayer from "@/components/audio-player";

export async function findWord(word: string): Promise<DictionaryData> {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const data = await fetch(url);
  return data.json();
}

export default async function Home() {
  const data = await findWord("school");

  return (
    <>
      <main className="max-w-xl mx-auto">
        <nav className="flex justify-between mt-4 items-center">
          <Link href="/">
            <IconBook2 height={36} width={36} />
          </Link>

          <div className="flex space-x-2">
            <button className="font-medium flex items-center space-x-1">
              <span>Serif</span>
              <span>
                <IconChevronDown
                  className="text-purple-500"
                  height={14}
                  width={14}
                />
              </span>
            </button>

            {/* <div>
              <input type="checkbox" className="toggle" defaultChecked />
            </div> */}
          </div>
        </nav>

        <form className="flex w-full h-11 px-4 mb-8 mt-6 rounded-lg justify-between bg-neutral-200">
          <input
            type="text"
            className="outline-none placeholder:font-normal flex-grow bg-transparent font-bold"
            placeholder="Search..."
          />

          <button className="text-purple-500">
            <IconSearch height={16} width={16} />
          </button>
        </form>
        {data.map((wordInfo, i) => (
          <div key={i}>
            <div className="flex w-full justify-between items-center">
              <div>
                <h1 className="font-bold text-5xl">{wordInfo.word}</h1>
                <p className="text-purple-500 text-xl mt-2">
                  {wordInfo.phonetics[0].text}
                </p>
              </div>

              <AudioPlayer url={wordInfo.phonetics[0].audio} />
            </div>

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
                            "{definition.example}"
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap space-x-3 mt-2 mb-8">
                    {wordMeanings.synonyms.length ? (
                      <p className="text-gray-500">Synonyms</p>
                    ) : null}
                    {wordMeanings.synonyms.map((synonym, i) => (
                      <Link
                        key={i}
                        href="/"
                        className="text-purple-500 font-bold"
                      >
                        {synonym}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="mb-6">
              <hr className="w-full" />
              <div className="flex mt-2 text-xs text-gray-500 flex-wrap items-center space-x-2">
                <p className="text-sm">Source:</p>
                <Link href="/">https://en.wikitionary.org/wiki/keyboard</Link>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
