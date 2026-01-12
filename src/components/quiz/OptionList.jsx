import OptionItem from "./OptionItem";

const OptionList = ({options, selectedOption, onSelect}) => {
  return (
    <ul className="flex flex-col gap-9 px-24 xl:px-18">
      {options.map((option) => (
        <OptionItem
          key={option.fraction} 
          option={option}
          isSelected={selectedOption?.fraction === option.fraction}
          onClick={() => onSelect(option)}
        />
      ))}
    </ul>
  );
};

export default OptionList;
