"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const submitHandler =(event   )=>{
    event.preventDefault();
    if(!search)
    {
        return;
    }
    router.push(`/search/${search}`);
  }
  return (
    <form
      action=""
      onSubmit={submitHandler}
      className="mx-auto flex max-w-6xl items-center justify-between px-5"
    >
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
        className="h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none"
      />
      <button type="submit"  disabled={!search} className="text-amber-700 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
