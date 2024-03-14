"use client";

import SearchIcon from "@/assets/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams({ word: searchValue });

    if (searchValue.trim() === "") {
      params.delete("word");
    } else {
      params.set("word", searchValue);
    }

    console.log(params, `${pathname}?${params.toString()}`);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="flex w-full h-11 px-4 mb-8 mt-6 rounded-lg justify-between bg-base-200">
      <input
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        type="text"
        defaultValue={searchParams.get("word")?.toString()}
        className="outline-none placeholder:font-normal flex-grow bg-transparent font-bold"
        placeholder="Search..."
      />

      <button
        type="button"
        onClick={() => handleSearch()}
        className="text-purple-500"
      >
        <SearchIcon height={18} width={18} />
      </button>
    </form>
  );
}
