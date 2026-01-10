import ScoreTitle from "./ScoreTitle";
import ScoreDescription from "./ScoreDescription";
import Button from "./button";


const TraitScore = ({scoreLevel,description}) => {
    return ( 
    <section className="w-full max-w-355 mx-auto flex flex-col pt-12 pb-13">
        <ScoreTitle level={scoreLevel}/>
        <ScoreDescription  description={description} className="flex flex-col xl:flex-row h-full "/>
        <Button className="w-full flex justify-end"/>
    </section> );
}
 
export default TraitScore;