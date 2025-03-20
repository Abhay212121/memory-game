import { useState } from "react";

function Card({ img, name, difficulty, handleCardClick, element }) {
  const [click, setClick] = useState(false);

  //reducing the length of the name prop.
  name = name.split(",");
  if (name.length == 1) {
    name = name[0];
  } else {
    name = name.toString().split(" ");
    if (name.length == 1) {
      name = name[0];
    } else {
      name = name[1];
    }
  }

  return (
    // <div
    //   onClick={() => {
    //     handleCardClick(element);
    //     setClick(true);
    //     setTimeout(() => {
    //       setClick(false);
    //     }, 2000);
    //   }}
    //   id="card"
    //   className={`flex flex-col justify-center gap-2 py-5 w-60 items-center bg-black hover:cursor-pointer transition-all duration-500 transform-3d perspective-5000 ${
    //     click ? "rotate - y - 180" : null
    //   }`}
    // >
    //   <div className="p-5 box-border absolute backface-hidden">
    //     <img
    //       src={img}
    //       alt="image not found"
    //       // className="w-60 h-70 m-auto"
    //       className={
    //         difficulty == "easy"
    //           ? "w-60 h-70 m-auto"
    //           : difficulty == "medium"
    //           ? "w-60 h-70 m-auto"
    //           : "w-40 "
    //       }
    //     />
    //   </div>
    //   <div>
    //     <img
    //       src="/images/card-bg.jpeg"
    //       alt="image not found"
    //     />
    //   </div>
    //   {difficulty == "hard" ? null : (
    //     <p className="font-display text-xl text-white ">{name}</p>
    //   )}
    // </div>

    <div
      onClick={() => {
        handleCardClick(element);
      }}
      className="flex flex-col justify-center gap-2 py-5 w-60 items-center bg-black hover:cursor-pointer "
    >
      <div className="p-5 box-border">
        <img
          src={img}
          alt="image not found"
          // className="w-60 h-70 m-auto"
          className={
            difficulty == "easy"
              ? "w-60 h-70 m-auto"
              : difficulty == "medium"
              ? "w-60 h-70 m-auto"
              : "w-40 "
          }
        />
      </div>
      {difficulty == "hard" ? null : (
        <p className="font-display text-xl text-white ">{name}</p>
      )}
    </div>

    // <div class="relative perspective-1000">
    //   <div class="transition-all duration-500 transform-style-3d">
    //     <div class="backface-hidden absolute w-full h-full inset-0 :rotate-y-0">
    //       {/* <div className="p-5 box-border"> */}
    //       <img
    //         src={img}
    //         alt="image not found"
    //         // className="w-60 h-70 m-auto"
    //         className={
    //           difficulty == "easy"
    //             ? "w-60 h-70 m-auto"
    //             : difficulty == "medium"
    //             ? "w-60 h-70 m-auto"
    //             : "w-40 "
    //         }
    //       />
    //       {/* </div> */}
    //       <div class="bg-blue-500 text-white p-4">Front</div>
    //     </div>
    //     <div class="backface-hidden absolute w-full h-full inset-0 hover:rotate-y-180">
    //       {/* <!-- Back side content --> */}
    //       <img
    //         src="/images/card-bg.jpeg"
    //         alt="image not found"
    //       />
    //       <div class="bg-green-500 text-white p-4">Back</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
