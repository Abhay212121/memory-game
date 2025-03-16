import Footer from "./components/Footer";
import Game from "./components/Game";
import Loading from "./components/Loading";
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
        />
      )}
    </>
  );
}

export default App;
