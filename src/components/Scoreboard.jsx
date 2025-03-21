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
      }  flex-col text-4xl px-5 py-3 font-body absolute right-15 top-14`}
    >
      <p className="text-green-500">Score: {score}</p>
      <p className="text-red-500">High score: {highScore}</p>
    </div>
  );
}
