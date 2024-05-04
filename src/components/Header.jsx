"use client";

import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkMode from "./DarkMode";
import React, { useState } from "react";
import Search from "@/components/Search";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="w-auto h-6 sm:h-10"
              src="/images/YGG_Logo.svg"
              alt=""
            />
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={
            (open
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full ") +
            "absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between"
          }
        >
          <div className="flex flex-col px-2 -mx-4  items-center md:flex-row md:mx-10 md:py-0">
            <MenuItem title="home" address="/" />
            <MenuItem title="games" address="/games" />
            <MenuItem title="guilds" address="/guilds" />
          </div>

          <Search />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}
