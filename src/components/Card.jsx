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
      className="p-4 flex flex-col justify-center border-2 gap-4 w-60 items-center bg-black"
    >
      <div>
        <img
          src={img}
          alt="image not found"
          className="w-60 h-70 m-auto"
        />
      </div>
      {difficulty == "hard" ? null : (
        <p className="font-display text-xl text-white ">{name}</p>
      )}
    </div>
  );
}

export default Card;
