import ScoreTitle from "./ScoreTitle";
import ScoreDescription from "./ScoreDescription";
import Button from "./Button";

const TraitScore = ({
  scoreLevel,
  description,
  handleNextCategory,
  isLastCategory,
  nextCategoryLabel,
  fullDescriptions,
}) => {
  return (
    <section className="w-full h-fit min-h-135 max-w-355 mx-auto flex flex-col items-center pt-12 pb-13 px-8 xl:items-start">
      <ScoreTitle level={scoreLevel} />
      <ScoreDescription
        description={description}
        fullDescriptions={fullDescriptions}
        level={scoreLevel}
        className="flex flex-col h-full "
      />
      <Button
        onClick={handleNextCategory}
        isLast={isLastCategory}
        nextLabel={nextCategoryLabel}
        className="w-full flex justify-end"
      />
    </section>
  );
};

export default TraitScore;
