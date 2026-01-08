const OptionItem = ({ option, isSelected, onClick }) => {
    
  const textParts = option.description.split("。");
  const title = textParts[0] + "。";
  const description = textParts[1];

  return (
    <li
      onClick={onClick}
      className={`flex items-start lg:items-center cursor-pointer group ${
        isSelected ? "text-primary" : "text-text-main"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full border-3 flex items-center justify-center shrink-0 mr-2 transition-colors ${
          isSelected ? "border-primary" : "border-text-main"
        }`}
      >
        {isSelected && <div className="w-4 h-4 bg-primary rounded-full" />}
      </div>
      <div className="flex flex-col lg:flex-row">
        <p className="font-bold text-xl leading-normal">{title}</p>
        <p className="text-xl leading-normal">{description}</p>
      </div>
    </li>
  );
};

export default OptionItem;
