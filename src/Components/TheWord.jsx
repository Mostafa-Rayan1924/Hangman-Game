const TheWord = ({ randoomWord, wordIndexArr }) => {
  let arrFromRandomWord = randoomWord.split("");

  return (
    <div className="bg-slate-100  py-4 flex items-center justify-center gap-2 flex-wrap">
      {arrFromRandomWord.map((item, index) => {
        const isMatched = wordIndexArr.includes(index);
        return (
          <div
            key={index}
            className="bg-white border-b-4 grid place-items-center text-2xl border-black w-8 h-8 sm:w-14 sm:h-14">
            {item === " " ? "-" : isMatched ? item : <h3></h3>}
          </div>
        );
      })}
    </div>
  );
};

export default TheWord;
