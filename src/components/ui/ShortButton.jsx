function ShortButton() {
  return (
    <>
      <button className="w-full max-w-82.5 bg-primary hover:bg-primary-focus active:bg-primary-focus font-sans font-bold text-neutral-main text-[32px] leading-normal py-6 px-18 cursor-pointer flex justify-center items-center gap-2 ">
        <p>開始測驗</p>
        <span class="material-icons text-[48px]!">arrow_forward</span>
      </button>
    </>
  );
}

export default ShortButton;
