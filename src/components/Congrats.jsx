import Icon from "@mdi/react";
import { mdiReplay } from "@mdi/js";

export default function Congrats({
  score,
  setFlag,
  setScore,
  setSelectedArr,
  difficulty,
}) {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center absolute ${
        difficulty == "hard" ? "mb-100" : null
      } 
    `}
    >
      <div className="w-1/2 flex items-center justify-around flex-col bg-black h-2/3 font-display gap-3 text-white border-8 border-white rounded-md p-8">
        <p className="text-3xl text-red-600">Congrats!! You Won!!</p>
        <div className="flex justify-around items-center w-full">
          <img
            src="/images/congrats.gif"
            alt="image not found"
            className="w-80"
          />
          <div className="flex flex-col items-center justify-around h-full">
            <p className="text-4xl underline text-green-500">Score: {score}</p>
            <Icon
              path={mdiReplay}
              size={7}
              className="font-display hover:cursor-pointer"
              onClick={() => {
                setFlag(false);
                setScore(0);
                setSelectedArr([]);
              }}
            />
          </div>
        </div>
        <div>
          <p
            className="text-4xl text-red-600 underline hover:cursor-pointer"
            onClick={() => {
              setFlag(true);
            }}
          >
            Home
          </p>
        </div>
      </div>
    </div>
  );
}
