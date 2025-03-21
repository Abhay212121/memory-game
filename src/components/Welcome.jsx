import { useEffect, useState } from "react";

function Welcome({ animeId, setDifficulty, difficulty, setAnimeId, setFlag }) {
  const [alertData, setAlertData] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setAnimeId(0);
    setDifficulty("");
  }, [visible]);

  return (
    <>
      <div className="w-screen h-screen font-body flex flex-col items-center pt-50 bg-[url('https://res.cloudinary.com/df0xhk8mc/image/upload/v1742583585/bg01_cd26oi.jpg')] bg-center bg-cover">
        <div className="text-3xl text-white p-20 flex items-center justify-around w-full ">
          <div className="flex flex-col items-center gap-3">
            <h2 className="border-b-3">Select your difficulty</h2>
            <button
              className={`hover:cursor-pointer ${
                difficulty == "easy" ? "text-red-500" : ""
              }`}
              onClick={() => {
                setDifficulty("easy");
              }}
            >
              Easy
            </button>
            <button
              className={`hover:cursor-pointer ${
                difficulty == "medium" ? "text-red-500" : ""
              }`}
              onClick={() => {
                setDifficulty("medium");
              }}
            >
              Medium
            </button>
            <button
              className={`hover:cursor-pointer ${
                difficulty == "hard" ? "text-red-500" : ""
              }`}
              onClick={() => {
                setDifficulty("hard");
              }}
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
              onClick={() => {
                setAnimeId(1735);
              }}
            >
              Naruto
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 11061 ? "text-red-500" : ""
              }`}
              onClick={() => {
                setAnimeId(11061);
              }}
            >
              HxH
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 40748 ? "text-red-500" : ""
              }`}
              onClick={() => {
                setAnimeId(40748);
              }}
            >
              Jujutsu Kasien
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 38000 ? "text-red-500" : ""
              }`}
              onClick={() => {
                setAnimeId(38000);
              }}
            >
              Demon Slayer
            </button>
            <button
              className={`hover:cursor-pointer ${
                animeId == 16498 ? "text-red-500" : ""
              }`}
              onClick={() => {
                setAnimeId(16498);
              }}
            >
              Attack on Titan
            </button>
          </div>
        </div>
        <div>
          <button
            className="hover:cursor-pointer text-white text-4xl border-4 p-2 rounded-2xl w-2xs"
            onClick={() => {
              setVisible(true);
              if (animeId == 0 && difficulty == "") {
                setAlertData("Select the details");
              } else if (animeId == 0) {
                setAlertData("Select an anime");
              } else if (difficulty == "") {
                setAlertData("Choose difficulty");
              } else {
                setFlag(false);
              }
            }}
          >
            Play
          </button>
        </div>
        {alertData == "" ? (
          visible == true ? (
            <div className="bg-white p-3 text-xl rounded-2xl mt-5 border-4 animate-pulse">
              <p>Select the details</p>
            </div>
          ) : null
        ) : (
          <div className="bg-white p-3 text-xl rounded-2xl mt-5 border-4 animate-pulse">
            <p>{alertData}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Welcome;
