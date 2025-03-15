export default function GameOver() {
  return (
    <div className="h-screen w-screen flex items-center justify-center absolute ">
      <div className="w-1/2 bg-black h-2/3 border-2">
        <h1 className="text-4xl text-center h-fit my-auto font-display text-white">
          Game over
        </h1>
      </div>
    </div>
  );
}
