function Welcome({ setDifficulty, setAnimeId, setFlag }) {
  return (
    <div className="w-screen h-screen font-display flex flex-col items-center pt-50 ">
      <div className="text-3xl text-black p-20 flex justify-evenly items-start gap-80  ">
        <div className="flex flex-col items-center gap-3">
          <h2 className="border-b-3">Select your difficulty</h2>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setDifficulty("easy")}
          >
            Easy
          </button>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setDifficulty("medium")}
          >
            Medium
          </button>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setDifficulty("hard")}
          >
            Hard
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h2 className="border-b-3">Select your fav Anime</h2>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setAnimeId(1735)}
          >
            Naruto
          </button>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setAnimeId(11061)}
          >
            HxH
          </button>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setAnimeId(40748)}
          >
            Jujutsu Kasien
          </button>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setAnimeId(38000)}
          >
            Demon Slayer
          </button>
          <button
            className="hover:cursor-pointer focus:outline-2"
            onClick={() => setAnimeId(16498)}
          >
            Attack on Titan
          </button>
        </div>
      </div>
      <div>
        <button
          className="hover:cursor-pointer text-4xl border-4 p-2 rounded-2xl"
          onClick={() => setFlag(false)}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default Welcome;
