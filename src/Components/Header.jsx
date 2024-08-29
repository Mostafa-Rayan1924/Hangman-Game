const Header = ({ randomCat }) => {
  return (
    <header className="bg-white my-5">
      <div className="flex gap-4  items-center justify-between">
        <div>
          <h1 className="text-[16px] sm:text-2xl font-bold text-gray-900 ">
            Hangman Game
          </h1>
        </div>
        <h2 className="text-[16px] sm:text-lg">
          Word From:
          <span className="text-indigo-900  font-bold"> {randomCat}</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
