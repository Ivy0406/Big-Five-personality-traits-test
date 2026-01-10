const ScoreDescription = ({ description ,className}) => {
    return ( 
    <div className={`${className}`}>
        <p className="w-full h-full min-h-30.75 max-w-202.5 text-text-sub text-2xl leading-normal font-light">{description}</p> 
    </div>
    );
}
 
export default ScoreDescription;