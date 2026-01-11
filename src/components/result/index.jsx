import TraitHero from "./TraitHero";
import TraitNames from "./TraitNames";
import TraitScore from "./TraitScore";
import Navbar from "./Navbar";
import Category from "./Category";
import { useResultData } from "./useResultData";


const Result = () => {

  const {
  loading,
  categoriesList,
  handleCategoryChange,
  traitsNames,
  targetCategory,
  targetCategoryDescription,
  scoreLevel,
  resultDescription,
  fullDescriptions,
  isLastCategory,
  nextCategoryLabel,
  handleNextCategory,
} = useResultData();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-primary/10">
        <p className="text-xl text-neutral-main font-bold">
          正在分析您的特質結果...
        </p>
      </div>
    );
  }
  

  return (
    <main className="w-full h-screen flex flex-col">
      <TraitHero traitType={targetCategory.en} className="pt-6 flex-1">
        <div className="w-full max-w-355 mx-auto flex flex-col justify-between h-full pb-12.25">
          <div className="w-full  flex justify-between">
            <TraitNames traitNames={traitsNames} />
            <Navbar
              options={categoriesList}
              activeKey={targetCategory?.en}
              onSelect={handleCategoryChange}
            />
          </div>
          <Category
            title={targetCategory}
            description={targetCategoryDescription}
          />
        </div>
      </TraitHero>
      <TraitScore
        scoreLevel={scoreLevel}
        description={resultDescription}
        handleNextCategory = {handleNextCategory}
        isLastCategory = {isLastCategory}
        nextCategoryLabel = {nextCategoryLabel}
        fullDescriptions = {fullDescriptions}
        className="flex-1"
      />
    </main>
  );
};

export default Result;
