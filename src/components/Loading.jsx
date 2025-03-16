import { useEffect, useState } from "react";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2200);
  }, []);

  return (
    <div
      className={` ${
        visible ? "flex" : "hidden"
      } justify-center items-center h-screen w-screen bg-black absolute`}
    >
      <div className="flex flex-col items-center z-5">
        <img
          src="/images/bakugo.gif"
          alt="image not found"
        />
        <h3 className="text-3xl text-white font-display">Loading....</h3>
      </div>
    </div>
  );
}
