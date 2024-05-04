"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination({ results }) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const cardPerPage = 10;
  const pageCount = Math.ceil(results.length / cardPerPage);

  const pageButtons = Array.from({ length: pageCount }, (_, index) => index);

  const handleClick = (item) => {
    params.set("page", String(item + 1));
    replace(`${path}?${params}`);
  };
  return (
    <div className="flex justify-center">
      {pageButtons.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          {item + 1}
        </button>
      ))}
    </div>
  );
}
