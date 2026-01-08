
const Question = ({ question, traitName }) => {
  return (
    <div className="px-24 flex flex-col justify-end gap-50 lg:gap-112.25">
      <div className="flex flex-col gap-4">
        <p className="text-[120px] italic font-en text-text-main">Q</p>
        <p className="text-5xl font-light text-text-main pl-12 h-28.5">
          {question}
        </p>
      </div>

      <div>
        <p className="text-text-minor text-[16px] leading-normal">
          {traitName.zh}
        </p>
        <p className="text-text-minor text-[12px] leading-normal">
          {traitName.en}
        </p>
      </div>
    </div>
  );
};

export default Question;