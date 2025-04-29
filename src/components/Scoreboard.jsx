import { useEffect, useState } from "react";
import { setHighScoreData, getHighScoreData } from "../utils/data";

export default function Scoreboard({ score, animeId, difficulty }) {
  const [visible, setVisible] = useState(false);
  const [highScore, setHighScore] = useState(
    getHighScoreData(animeId, difficulty)
  );

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2200);
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScoreData(animeId, difficulty, score);
      setHighScore(score);
    }
  }, [score]);

  return (
    <div
      className={`border-4 rounded-md border-white ${
        visible ? "flex" : "hidden"
      }  flex-col xl:text-2xl 2xl:text-4xl xl:px-3 2xl:px-5 py-3 font-body absolute left-15 top-44`}
    >
      <p className="text-green-500">Score: {score}</p>
      <p className="text-red-500">High score: {highScore}</p>
    </div>
  );
}
