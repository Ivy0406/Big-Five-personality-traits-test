function IconButton({onClick}) {
  return (
    <>
      <button className="bg-primary hover:bg-primary-focus active:bg-primary-focus font-sans font-bold text-neutral-main p-6 cursor-pointer flex justify-center items-center w-24 aspect-square"
      onClick={onClick}>
        <span className="material-icons text-[48px]!">arrow_back</span>
      </button>
    </>
  );
}

export default IconButton;
