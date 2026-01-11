import ScoreTitle from "./ScoreTitle";
import ScoreDescription from "./ScoreDescription";
import Button from "./button";

const TraitScore = ({
  scoreLevel,
  description,
  handleNextCategory,
  isLastCategory,
  nextCategoryLabel,
}) => {
  return (
    <section className="w-full max-w-355 mx-auto flex flex-col pt-12 pb-13">
      <ScoreTitle level={scoreLevel} />
      <ScoreDescription
        description={description}
        className="flex flex-col xl:flex-row h-full "
      />
      <Button
        onClick={handleNextCategory}
        isLast = {isLastCategory}
        nextLabel={nextCategoryLabel}
        className="w-full flex justify-end"
      />
    </section>
  );
};

export default TraitScore;
