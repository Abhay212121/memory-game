import { useEffect, useState } from "react";
import Card from "./card";

function Game({ animeId, difficulty }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArr, setSelectedArr] = useState([]);
  const [displayArr, setDisplayArr] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  //fetching the data
  useEffect(() => {
    console.log(difficulty);
    let url = `https://api.jikan.moe/v4/anime/${animeId}/characters`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => data.sort((a, b) => a.favorites - b.favorites))
      .then((data) => data.splice(data.length - 20, 20))
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [animeId]);

  useEffect(() => {
    let tempArr = [...data];
    for (let i = tempArr.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = temp;
    }
    if (difficulty == "easy") {
      tempArr = tempArr.splice(0, 5);
    } else if (difficulty == "medium") {
      tempArr = tempArr.splice(0, 10);
    } else if (difficulty == "hard") {
      tempArr = tempArr.splice(0, 16);
    }
    setDisplayArr(tempArr);
  }, [data]);

  //checking the difficulty level and generating the temporaray random array.

  function shuffleTheArr() {
    let tempArr = [...displayArr];
    for (let i = tempArr.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = temp;
    }
    setDisplayArr(tempArr);
  }

  function handleCardClick(element) {
    if (selectedArr.includes(element)) {
      console.log("game over");
      setGameOver(true);
    } else {
      let tempArr = [...selectedArr];
      tempArr.push(element);
      setSelectedArr(tempArr);
      setScore((score) => score + 1);
      shuffleTheArr();
    }
  }

  return (
    <>
      <div className="h-screen flex-col gap-0 flex items-center justify-center w-screen bg-amber-300">
        <div
          className={
            difficulty == "easy"
              ? "flex"
              : "grid grid-flow-col gap-y-3 grid-rows-2 w-2/3 "
          }
        >
          {displayArr.map((element) => {
            return (
              <Card
                img={element.character.images.jpg.image_url}
                name={element.character.name}
                key={element.character.name}
                difficulty={difficulty}
                handleCardClick={handleCardClick}
                element={element}
              />
            );
          })}
        </div>
        <div className="text-4xl">{gameOver ? "Game Over" : score}</div>
      </div>
    </>
  );
}

export default Game;
