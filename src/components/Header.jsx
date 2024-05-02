import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <div>
      <div className="flex items-center px-8 py-6 bg-gray-900 justify-between">
        <div className="text-white flex items-center space-x-4">
          <Link href="/" class="flex items-center mr-4">
            <img
              src="/images/YGG_Logo.svg"
              alt="ygg-shield"
              height="40"
              width="auto"
            />
          </Link>

          <div className="flex items-center font-semibold space-x-6 bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-600 to-green-400">
            <MenuItem title="home" address="/" />
            <MenuItem title="games" address="/games" />
            <MenuItem title="guilds" address="/guilds" />
          </div>
        </div>

        <div className="text-white flex items-center space-x-4">
          <DarkMode />
          <button
            type="button"
            class="rounded-full px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
          >
            SIGN UP
          </button>

          <button
            type="button"
            class="rounded-full px-1 py-1 border border-white"
          >
            <svg
              width="24px"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 7H4V14.5313L12 18.7401L20 14.5313V7ZM22 15.739L12 21L2 15.739V5H22V15.739Z"
                fill="#F4F9FA"
              ></path>
              <path
                d="M7.5 13C8.32843 13 9 12.3284 9 11.5C9 10.6716 8.32843 10 7.5 10C6.67157 10 6 10.6716 6 11.5C6 12.3284 6.67157 13 7.5 13Z"
                fill="#F4F9FA"
              ></path>
              <path
                d="M16.5 13C17.3284 13 18 12.3284 18 11.5C18 10.6716 17.3284 10 16.5 10C15.6716 10 15 10.6716 15 11.5C15 12.3284 15.6716 13 16.5 13Z"
                fill="#F4F9FA"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.64645 13.6464C9.84171 13.4512 10.1583 13.4512 10.3536 13.6464C10.7386 14.0315 11.3492 14.25 12 14.25C12.6508 14.25 13.2614 14.0315 13.6464 13.6464C13.8417 13.4512 14.1583 13.4512 14.3536 13.6464C14.5488 13.8417 14.5488 14.1583 14.3536 14.3536C13.7386 14.9685 12.8492 15.25 12 15.25C11.1508 15.25 10.2614 14.9685 9.64645 14.3536C9.45118 14.1583 9.45118 13.8417 9.64645 13.6464Z"
                fill="#F4F9FA"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
