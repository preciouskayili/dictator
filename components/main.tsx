"use client";

import { DictionaryData } from "@/types/dictionary";
import AudioPlayer from "./audio-player";
import Search from "./search";
import Link from "next/link";

export default function Main({ details }: { details: DictionaryData }) {
  return (
    <>
      <Search />

      <div className="flex w-full justify-between items-center">
        <div>
          <h1 className="font-bold text-5xl">{details[0].word}</h1>
          <p className="text-purple-500 text-xl mt-2">
            {details[0].phonetics[0].text}
          </p>
        </div>

        <AudioPlayer url={details[0].phonetics[0].audio} />
      </div>
      {details.map((wordInfo, i) => (
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
        <div className="w-full h-px bg-base-200" />
        <div className="flex mt-2 text-xs text-gray-500 flex-wrap items-center space-x-2">
          <p className="text-sm">Source:</p>
          {details[0].sourceUrls.map((source, i) => (
            <Link key={i} href={source} target="_blank">
              {source}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
