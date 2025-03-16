import Footer from "./Footer";

function Welcome({ animeId, setDifficulty, difficulty, setAnimeId, setFlag }) {
  return (
    <>
      <div className="w-screen h-screen font-body flex flex-col items-center pt-50 bg-[url(images/bg01.jpg)] bg-center bg-cover">
        <div className="text-3xl text-white p-20 flex items-center justify-around w-full ">
          <div className="flex flex-col items-center gap-3">
            <h2 className="border-b-3">Select your difficulty</h2>
            <button
              className={`hover:cursor-pointer ${
                difficulty == "easy" ? "text-red-500" : ""
              }`}
              onClick={() => setDifficulty("easy")}
            >
              Easy
            </button>
            <button
              className={`hover:cursor-pointer ${
                difficulty == "medium" ? "text-red-500" : ""
              }`}
              onClick={() => setDifficulty("medium")}
            >
              Medium
            </button>
            <button
              className={`hover:cursor-pointer ${
                difficulty == "hard" ? "text-red-500" : ""
              }`}
              onClick={() => setDifficulty("hard")}
            >
              Hard
            </button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h2 className="border-b-3">Select your fav Anime</h2>
            <button
              className={`hover:cursor-pointer ${
                animeId == 1735 ? "text-red-500" : ""
              }`}
              onClick={() => setAnimeId(1735)}
            >
              Naruto
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 11061 ? "text-red-500" : ""
              }`}
              onClick={() => setAnimeId(11061)}
            >
              HxH
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 40748 ? "text-red-500" : ""
              }`}
              onClick={() => setAnimeId(40748)}
            >
              Jujutsu Kasien
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 38000 ? "text-red-500" : ""
              }`}
              onClick={() => setAnimeId(38000)}
            >
              Demon Slayer
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 16498 ? "text-red-500" : ""
              }`}
              onClick={() => setAnimeId(16498)}
            >
              Attack on Titan
            </button>
          </div>
        </div>
        <div>
          <button
            className="hover:cursor-pointer text-white text-4xl border-4 p-2 rounded-2xl w-2xs"
            onClick={() => setFlag(false)}
          >
            Play
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
