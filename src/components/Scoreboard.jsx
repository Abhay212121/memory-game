import { useEffect, useState } from "react";

export default function Scoreboard({ score, highScore, setHighScore }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2200);
  }, []);

  useEffect(() => {
    if (score > highScore) {
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
