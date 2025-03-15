function Card({ img, name, difficulty, handleCardClick, element }) {
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
    <div
      onClick={() => {
        handleCardClick(element);
      }}
      className="flex flex-col justify-center gap-2 py-5 w-60 items-center bg-black hover:cursor-pointer"
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
  );
}

export default Card;
