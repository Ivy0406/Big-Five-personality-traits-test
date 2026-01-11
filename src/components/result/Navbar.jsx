const Navbar = ({ options, activeKey, onSelect }) => {
  return (
    <ul className="flex justify-between gap-12">
      {options.map((option) => {
        const isActive = activeKey === option.key;
        return (
          <li
            key={option.key}
            onClick={() => onSelect(option.key)}
            className={`
              w-fit h-8 text-neutral-main cursor-pointer 
              hover:font-bold hover:border-b-4 hover:border-primary 
              ${isActive ? "font-bold border-b-4 border-primary" : "font-light"}
            `}
          >
            <a className="w-full h-full block">{option.zhCategoryName}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
