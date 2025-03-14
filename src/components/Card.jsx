function Card({ img, name, difficulty, handleCardClick }) {
  //reducing the length of the name prop.
  name = name.split(",");
  if (name.length == 1) {
    name = name[0];
  } else {
    name = name[1];
  }

  return (
    <div
      onClick={() => {
        handleCardClick(name);
      }}
      className="p-4 flex flex-col justify-center border-2 gap-4 w-fit items-center bg-black"
    >
      <div>
        <img
          src={img}
          alt="image not found"
          className="w-40 h-50 m-auto"
        />
      </div>
      {difficulty == "Hard" ? null : (
        <p className="font-display text-xl text-white ">{name}</p>
      )}
    </div>
  );
}

export default Card;
