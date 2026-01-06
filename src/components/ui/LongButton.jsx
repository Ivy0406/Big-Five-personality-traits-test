function LongButton () {
    return (
        <>
        <button className="bg-primary hover:bg-primary-focus active:bg-primary-focus font-sans font-bold text-neutral-main text-[32px] leading-normal py-6 pr-6 cursor-pointer flex justify-end items-center gap-2 w-full">
            <p>下一題</p>
            <span class="material-icons text-[48px]!">arrow_forward</span>
        </button>
        </>
    )
}

export default LongButton;