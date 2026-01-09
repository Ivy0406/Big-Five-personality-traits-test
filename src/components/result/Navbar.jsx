const Navbar = ({ options }) => {
  return (
    <ul className="flex justify-between gap-12">
      {options.map((option) => (
        <li 
        key={option}
        className="w-fit h-8 text-neutral-main font-light cursor-pointer hover:font-bold active:font-bold hover:border-b-4 hover:border-primary active:border-b-4 active:border-primary">
          <a className="w-full h-full">{option}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
