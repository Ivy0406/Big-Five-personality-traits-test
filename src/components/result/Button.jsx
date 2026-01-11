const Button = ({ isLast, onClick, nextLabel, className = "" }) => {
  return (
    <div className={`${className}`}>
      <button className={`w-fit h-full cursor-pointer ${isLast ? "border-2 border-text-main py-6 px-18" :""}`} onClick={onClick}>
        {isLast ? (
          <p className="text-[32px] leading-normal text-text-main font-bold flex items-center">
            重新測驗
            <span className="material-icons text-text-main text-[48px]! ml-2">
              arrow_forward
            </span>
          </p>
        ) : (
          <p className="text-[32px] text-text-main font-light flex items-center">
            下一個：
            <span className="font-bold leading-normal text-text-main">
              {nextLabel}
            </span>
            <span className="material-icons text-primary text-[48px]! ml-2">
              arrow_forward
            </span>
          </p>
        )}
      </button>
    </div>
  );
};

export default Button;
