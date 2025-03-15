import Game from "./components/Game";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [animeId, setAnimeId] = useState(0);
  const [flag, setFlag] = useState(true);

  return (
    <>
      {flag == true && (
        <Welcome
          setDifficulty={setDifficulty}
          setAnimeId={setAnimeId}
          setFlag={setFlag}
        />
      )}
      {flag == false && (
        <Game
          animeId={animeId}
          difficulty={difficulty}
        />
      )}
    </>
  );
}

export default App;
