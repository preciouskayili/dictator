"use client";

import SearchIcon from "@/assets/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams({ word: searchValue });

    if (searchValue.trim() === "") {
      params.delete("word");
    } else {
      params.set("word", searchValue);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className="flex w-full h-11 px-4 mb-8 mt-6 rounded-lg justify-between bg-base-200"
    >
      <input
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        type="text"
        defaultValue={searchParams.get("word")?.toString()}
        className="outline-none placeholder:font-normal flex-grow bg-transparent font-bold"
        placeholder="Search..."
      />

      <button className="text-purple-500">
        <SearchIcon height={18} width={18} />
      </button>
    </form>
  );
}
