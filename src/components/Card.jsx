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
      className="flex flex-col justify-center gap-2 py-5 w-60 items-center bg-black hover:cursor-pointer "
    >
      <div className="p-2 2xl:p-5 box-border">
        <img
          src={img}
          alt="image not found"
          className={
            difficulty == "easy"
              ? "p-2 w-60 h-70 m-auto"
              : difficulty == "medium"
              ? "xl:w-50 2xl:w-60 h-70 m-auto"
              : "xl:w-35 2xl:w-40 "
          }
        />
      </div>
      {difficulty == "hard" ? null : (
        <p className="font-display text-lg 2xl:text-xl text-white ">{name}</p>
      )}
    </div>
  );
}

export default Card;
