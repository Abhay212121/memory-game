import Icon from "@mdi/react";
import { mdiReplay, mdiHome } from "@mdi/js";

export default function GameOver({
  score,
  setScore,
  setFlag,
  setGameOver,
  setSelectedArr,
  difficulty,
}) {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center absolute ${
        difficulty == "hard" ? "mb-100 " : null
      }`}
    >
      <div
        className={`w-1/2 flex items-center my-auto justify-center gap-7 flex-col bg-black h-2/3 font-display 2xl:gap-3 text-white border-8 border-white rounded-md p-8  `}
      >
        <p className="text-4xl text-red-600">Game over!</p>
        <div className="flex">
          <Icon
            path={mdiHome}
            size={10}
            className="font-display xl:p-5 2xl:p-0 hover:cursor-pointer"
            onClick={() => {
              setFlag(true);
            }}
          />

          <Icon
            path={mdiReplay}
            size={10}
            className="font-display xl:p-5 2xl:p-0 hover:cursor-pointer"
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
