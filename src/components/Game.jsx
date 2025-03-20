import { useEffect, useState } from "react";
import Card from "./card";
import GameOver from "./Gameover";
import Congrats from "./Congrats";
import Loading from "./Loading";
import Scoreboard from "./Scoreboard";

function Game({ animeId, difficulty, setFlag }) {
  const [data, setData] = useState([]);
  const [selectedArr, setSelectedArr] = useState([]);
  const [displayArr, setDisplayArr] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [visible, setVisible] = useState(false);

  //fetching the data
  useEffect(() => {
    let url = `https://api.jikan.moe/v4/anime/${animeId}/characters`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => data.sort((a, b) => a.favorites - b.favorites))
      .then((data) => data.splice(data.length - 20, 20))
      .then((data) => {
        setData(data);
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
  useEffect(() => {
    let tempArr = [...displayArr];
    for (let i = tempArr.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = temp;
    }
    setDisplayArr(tempArr);
  }, [score]);

  function handleCardClick(element) {
    if (selectedArr.includes(element)) {
      setGameOver(true);
    } else {
      let tempArr = [...selectedArr];
      tempArr.push(element);
      setSelectedArr(tempArr);
      setScore((score) => score + 1);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2200);
  }, []);

  return (
    <>
      <Loading />
      <Scoreboard
        score={score}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <div
        className={
          difficulty == "hard"
            ? `h-fit flex-col gap-0 ${
                visible ? "flex" : "hidden"
              } items-center justify-center w-screen bg-black`
            : "h-screen flex-col gap-0 flex items-center justify-center w-screen bg-black"
        }
      >
        <div
          className={
            difficulty == "easy"
              ? `flex`
              : difficulty == "medium"
              ? "grid grid-flow-col gap-y-3 grid-rows-2 w-2/3 bg-black"
              : "grid grid-flow-col grid-rows-4 gap-y-3 bg-black"
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
        <div className="text-4xl text-white font-body">
          {difficulty == "easy"
            ? `${score}/5`
            : difficulty == "medium"
            ? `${score}/10`
            : `${score}/15`}
        </div>
        {gameOver ? (
          <GameOver
            setFlag={setFlag}
            score={score}
            setGameOver={setGameOver}
            setScore={setScore}
            setSelectedArr={setSelectedArr}
            difficulty={difficulty}
          />
        ) : null}
        {difficulty == "easy" ? (
          score == 5 ? (
            <Congrats />
          ) : null
        ) : difficulty == "medium" ? (
          score == 10 ? (
            <Congrats />
          ) : null
        ) : score == 15 ? (
          <Congrats />
        ) : null}
      </div>
    </>
  );
}

export default Game;
