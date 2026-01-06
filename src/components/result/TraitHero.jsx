const TraitHero = ({traitType}) => {
    const bgImg = new URL(`../../assets/images/banner-${traitType}.png`,import.meta.url).href;
    return ( 
        <>
        <div className="w-full h-135 bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImg})` }}></div>
        </>
     );
}
 
export default TraitHero;