import Game from "./components/Game";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [animeId, setAnimeId] = useState(0);

  return (
    <>
      {/* <Welcome
        setDifficulty={setDifficulty}
        setAnimeId={setAnimeId}
      /> */}
      <Game
        animeId={40748}
        difficulty={"Normal"}
      />
    </>
  );
}

export default App;
