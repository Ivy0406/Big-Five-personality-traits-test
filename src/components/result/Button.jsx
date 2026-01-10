const Button = ({className}) => {
  return (
    <div className={`${className}`}>
      <a className="w-fit h-full cursor-pointer">
        <p className="text-[32px] text-text-main font-light flex items-center">
          下一個：
          <span className="font-bold leading-normal text-text-main">
            外向性
          </span>
          <span className="material-icons text-primary text-[48px]! ml-2">
            arrow_forward
          </span>
        </p>
      </a>
    </div>
  );
};

export default Button;
