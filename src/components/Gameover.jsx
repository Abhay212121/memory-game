import Icon from "@mdi/react";
import { mdiReplay, mdiHome } from "@mdi/js";

export default function GameOver({
  score,
  setScore,
  setFlag,
  setGameOver,
  setSelectedArr,
}) {
  return (
    <div className="h-screen w-screen flex items-center justify-center absolute ">
      <div
        className={`w-1/2 flex items-center justify-around flex-col bg-black h-2/3 font-display gap-3 text-white border-8 border-white rounded-md p-8  `}
      >
        <p className="text-4xl text-red-600">Game over!</p>
        <div className="flex">
          <Icon
            path={mdiHome}
            size={10}
            className="font-display hover:cursor-pointer"
            onClick={() => {
              setFlag(true);
            }}
          />

          <Icon
            path={mdiReplay}
            size={10}
            className="font-display hover:cursor-pointer"
            onClick={() => {
              setFlag(false);
              setGameOver(false);
              setScore(0);
              setSelectedArr([]);
            }}
          />
        </div>
        <p className="text-4xl text-red-600 underline">Score : {score}</p>
      </div>
    </div>
  );
}
