import Icon from "@mdi/react";
import {
  mdiHelpCircleOutline,
  mdiMusicNoteEighth,
  mdiMusicNoteOff,
} from "@mdi/js";
import { useMemo, useState } from "react";

export default function Footer() {
  const [flag, setFlag] = useState(false);

  let homeSound = useMemo(() => {
    return new Audio("/audios/home-audio.mp4");
  }, []);

  function toggleAudio() {
    if (flag == false) {
      homeSound.play();
    } else {
      homeSound.pause();
    }
  }

  return (
    <div className="w-full px-50 py-10 flex items-center justify-between absolute bottom-0 left-0 ">
      <Icon
        path={flag ? mdiMusicNoteEighth : mdiMusicNoteOff}
        className="text-white hover:cursor-pointer"
        size={3}
        onClick={() => {
          toggleAudio();
          setFlag(!flag);
        }}
      />
      <Icon
        path={mdiHelpCircleOutline}
        size={3}
        className="text-white hover:cursor-pointer"
      />
    </div>
  );
}
