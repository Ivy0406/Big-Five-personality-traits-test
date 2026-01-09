const TraitHero = ({traitType , children="", className}) => {
    const bgImg = new URL(`../../assets/images/banner-${traitType}.png`,import.meta.url).href;
    return ( 
      
        <div className={`w-full h-135 bg-cover bg-center ${className}`} 
      style={{ backgroundImage: `url(${bgImg})` }}>
        {children}
      </div>
      
     );
}
 
export default TraitHero;