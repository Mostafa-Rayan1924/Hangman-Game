import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Letters from "./Components/Letters";
import Man from "./Components/Man";
import TheWord from "./Components/TheWord";
import Swal from "sweetalert2";
import { words } from "./data";
export default function App() {
  let [wordIndexArr, setWordIndexArr] = useState([]);
  let [wrongLength, setWrongLength] = useState(0);
  let [randomCat, setRandomCat] = useState("");
  let [randoomWord, setRandomWord] = useState("");
  function getRandomWordAndCat() {
    let wordsCat = Object.keys(words);
    let randomWordsCat = Math.floor(Math.random() * wordsCat.length);
    // get random category
    let randomcategory = wordsCat[randomWordsCat];
    setRandomCat(randomcategory);
    let WordsFromCat = words[randomcategory];
    let randomWordNumber = Math.floor(Math.random() * WordsFromCat.length);
    // get random word
    let randomWord = words[randomcategory][randomWordNumber];
    setRandomWord(randomWord);
  }
  useEffect(() => {
    getRandomWordAndCat();
  }, []);
  const getAllIndexes = (letter) => {
    return new Promise((resolve, reject) => {
      let indexes = [];
      randoomWord.split("").forEach((char, index) => {
        if (char.toLowerCase() === letter.toLowerCase()) {
          indexes.push(index);
        }
      });

      if (indexes.length === 0) {
        setWrongLength(wrongLength + 1);
      }

      setWordIndexArr((prevIndexes) => {
        const updatedIndexes = [...prevIndexes, ...indexes];
        resolve(updatedIndexes);
        return updatedIndexes;
      });
    })

      .then((updatedIndexes) => {
        win(updatedIndexes);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  function GreetingMsg() {
    switch (wrongLength) {
      case 0:
        return `King👑`;
        break;
      case 1:
        return `Excellent`;
        break;
      case 2:
        return `Very Good`;
        break;
      case 3:
        return `Good Bro`;
        break;

      case 4:
        return `You Have better than this try`;
        break;
      case 5:
        return `You win By Luck`;
        break;
      default:
        "GOOD JOB BRO";
        break;
    }
  }
  function resetGame() {
    setWrongLength(0);
    getRandomWordAndCat();
    setWordIndexArr([]);
    const clickedElements = document.querySelectorAll(".clicked");
    clickedElements.forEach((element) => element.classList.remove("clicked"));
  }
  function win(updatedIndexes) {
    let randomWordWithOutSpace = randoomWord.split("").filter((item) => {
      return item !== " ";
    });
    if (updatedIndexes?.length == randomWordWithOutSpace.length) {
      setTimeout(() => {
        Swal.fire({
          title: "WINNER!😍The Word is : " + randoomWord,
          text: GreetingMsg(),
          icon: "success",
          confirmButtonText: "Complete Playing",
        });
        resetGame();
      }, 200);
    }
  }
  function endGame() {
    if (wrongLength == 6) {
      setTimeout(() => {
        Swal.fire({
          title: "LOSER!🤡",
          text: " You Lost The Word is: " + randoomWord,
          icon: "error",
          confirmButtonText: "Play Again",
        });
        resetGame();
      }, 200);
      setWrongLength(0);
    }
  }

  useEffect(() => {
    endGame();
  }, [wrongLength]);

  return (
    <div className="container mb-10">
      <Header randomCat={randomCat} wrongLength={wrongLength} />
      <div className="flex box flex-col md:flex-row border-y-2 py-4 h-[70vh] md:h-[450px] border-slate-200 my-2  gap-4 flex-wrap">
        <Man wrongLength={wrongLength} />
        <Letters randoomWord={randoomWord} getAllIndexes={getAllIndexes} />
      </div>
      <TheWord wordIndexArr={wordIndexArr} randoomWord={randoomWord} />
    </div>
  );
}
