import React from "react";

const Header = () => {
  return (
    <header className="bg-white my-5">
      <div className="flex   gap-4  items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Hangman Game
          </h1>
        </div>

        <h2 className="text-[18px]">
          Word From:
          <span className="text-indigo-900 font-bold"> Countries</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
