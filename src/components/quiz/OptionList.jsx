import OptionItem from "./OptionItem";

const OptionList = ({options, selectedOption, handleOptionSelected}) => {
  return (
    <ul>
      {options.map((option) => (
        <OptionItem
          key={option.fraction} 
          option={option}
          isSelected={selectedOption?.fraction === option.fraction}
          onClick={() => handleOptionSelected(option)}
        />
      ))}
    </ul>
  );
};

export default OptionList;
