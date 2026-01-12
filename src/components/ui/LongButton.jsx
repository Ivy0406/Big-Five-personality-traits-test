function LongButton ({onClick,disabled,children}) {
    return (
        <button className="bg-primary hover:bg-primary-focus active:bg-primary-focus font-sans font-bold text-neutral-main text-[32px] leading-normal py-6 pr-6 cursor-pointer flex justify-end items-center gap-2 w-full disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={onClick} disabled={disabled} >
            <p>{children}</p>
            <span className="material-icons text-[48px]!">arrow_forward</span>
        </button>
    )
}

export default LongButton;