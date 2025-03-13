function Card() {
  return (
    <div className="p-4 flex flex-col items-center border-2 gap-4 w-fit">
      <div>
        <img
          src="/images/killua.jpg"
          alt="image not found"
          className="w-4/5 m-auto"
        />
      </div>
      <p className="font-display text-2xl ">Killua</p>
    </div>
  );
}

export default Card;
