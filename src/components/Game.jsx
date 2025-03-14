import { useEffect, useState } from "react";
import Card from "./card";

function Game({ animeId, difficulty }) {
  const [data, setData] = useState([]);

  //fetching the data
  let url = `https://api.jikan.moe/v4/anime/${animeId}/characters`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => data.sort((a, b) => a.favorites - b.favorites))
      .then((data) => data.splice(data.length - 20, 20))
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  //checking the difficulty level and generating the temporaray random array.
  let tempArr = data;
  for (let i = tempArr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = tempArr[i];
    tempArr[i] = tempArr[j];
    tempArr[j] = temp;
  }
  if (difficulty == "Easy") {
    tempArr = tempArr.splice(0, 5);
  } else if (difficulty == "Normal") {
    tempArr = tempArr.splice(0, 10);
  } else if (difficulty == "Hard") {
    tempArr = tempArr.splice(0, 16);
    console.log(tempArr);
  }

  function handleCardClick(key) {
    console.log(key);
  }

  return (
    <>
      <div
        className={
          difficulty == "Easy"
            ? "flex"
            : "grid grid-flow-col grid-rows-2 grid-col-gap"
        }
      >
        {tempArr.map((element) => {
          return (
            <Card
              img={element.character.images.jpg.image_url}
              name={element.character.name}
              key={element.character.name}
              difficulty={difficulty}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default Game;
