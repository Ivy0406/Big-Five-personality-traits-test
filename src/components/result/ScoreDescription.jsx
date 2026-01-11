const ScoreDescription = ({
  level,
  fullDescriptions,
  description,
  className,
}) => {
  return (
    <div className={`flex flex-col  ${className}`}>
      <p className={`w-full h-full ${level === "中" ? "min-h-9 mb-12":"min-h-30.75"}  max-w-202.5 text-text-sub text-2xl leading-normal font-light`}>
        {description}
      </p>
      {level === "中" ? (
        <div className="flex flex-col gap-6 mb-13.75">
          <div className="flex gap-1.25">
            <p className="w-fit min-w-11.5 text-[16px] text-text-sub font-bold">高 ——</p>
            <p className="w-fit max-w-189.75 text-[16px] text-text-sub font-light leading-normal">{fullDescriptions.high}</p>
          </div>
          <div className="flex gap-1.25">
            <p className="w-fit min-w-11.5 text-[16px] text-text-sub font-bold">低 ——</p>
            <p className="w-fit max-w-189.75 text-[16px] text-text-sub font-light leading-normal">{fullDescriptions.low}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ScoreDescription;
