import Icon from "@mdi/react";
import { mdiReplay } from "@mdi/js";

export default function Congrats() {
  return (
    <div className="h-screen w-screen flex items-center justify-center absolute ">
      <div className="w-1/2 flex items-center justify-around flex-col bg-black h-2/3 font-display gap-3 text-white border-8 border-white rounded-md p-8">
        <p className="text-4xl text-red-600">Congrats!! You Won!!</p>
        <div className="flex items-center">
          <a href="/">
            <img
              src="/images/congrats.gif"
              alt="image not found"
              className="w-80"
            />
          </a>
        </div>
        <a href="/">
          <p className="text-4xl text-red-600 underline hover:cursor-pointer">
            Play Again!
          </p>
        </a>
      </div>
    </div>
  );
}
