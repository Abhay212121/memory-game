import Game from "./components/Game";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [animeId, setAnimeId] = useState(0);
  const [flag, setFlag] = useState(true);

  return (
    <>
      <div className="absolute top-22 left-15 hover:cursor-pointer hover:animate-pulse">
        <img
          src="/images/logo.png"
          alt="image not found"
          className="w-50"
          onClick={() => {
            setFlag(true);
          }}
        />
      </div>
      {flag == true && (
        <Welcome
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          animeId={animeId}
          setAnimeId={setAnimeId}
          setFlag={setFlag}
        />
      )}
      {flag == false && (
        <Game
          animeId={animeId}
          difficulty={difficulty}
          setFlag={setFlag}
        />
      )}
    </>
  );
}

export default App;
