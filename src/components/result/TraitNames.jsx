const TraitNames = ({onClick, traitNames}) => {
    return ( 
    <div className="cursor-pointer" onClick={onClick}>
        <p className="text-neutral-main font-bold text-[16px] leading-normal">{traitNames.zh}</p>
        <p className="text-neutral-main font-light text-[12px] leading-normal">{traitNames.en}</p>
    </div> );
}
 
export default TraitNames;