import ok from "../audio/success.mp4";
import bad from "../audio/error.mp3";

const Letters = ({ getAllIndexes, randoomWord }) => {
  const englishAlphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  // Create Audio objects
  const okAudio = new Audio(ok);
  const badAudio = new Audio(bad);
  let handleClick = (item, e) => {
    getAllIndexes(item);
    e.target.classList.add("clicked");
    if (!randoomWord.toLowerCase().split("").includes(item)) {
      badAudio.play();
    } else {
      okAudio.play();
    }
  };
  return (
    <div className="flex-1 flex items-center  justify-center ">
      <div className="flex justify-center flex-wrap gap-2 ">
        {englishAlphabet.map((item) => {
          return (
            <button
              onClick={(e) => handleClick(item, e)}
              className="bg-indigo-700 text-white text-2xl md:text-3xl rounded-sm grid place-items-center w-10 md:w-16 h-10 md:h-16 cursor-pointer "
              key={item}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Letters;
