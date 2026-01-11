import TraitHero from "./TraitHero";
import TraitNames from "./TraitNames";
import TraitScore from "./TraitScore";
import Navbar from "./Navbar";
import Category from "./Category";
import { useResultData } from "./useResultData";



// const mockData = {
//   traitNames: {
//     zh: "五大性格特質心理測驗",
//     en: "Big Five personality traits test",
//   },
//   allCategoriesZh: ["經驗開放性", "盡責性", "外向性", "親和性", "情緒不穩定性"],
//   allCategoriesEn: [
//     "Openness",
//     "Conscientiousness",
//     "Extroversion",
//     "Agreeableness",
//     "Neuroticism",
//   ],
//   targetCategory: { en: "neuroticism", zh: "情緒不穩定性" },
//   targetCategoryDescription:
//     "情緒不穩定性是指在調整情緒時，冒出極端消極情緒的情況與不穩定性。不穩定性高的人在面臨高壓環境時，容易有憤怒、焦慮等消極情緒湧上；不穩定性低的人則較能心平氣和面對、不太會情緒化反應。",
//   sumScore: 8,
//   scoreLevel: "高",
//   resultDescription: {
//     high: "情緒不穩定性較高的你，是不是在面對不預期、碰到對自己不友善的情境時，會覺得自己有喉嚨有股氣憋著、呼吸急促、情緒高漲等狀況，久久不能平復呢？先深呼吸、喝杯水，給自己一些喘息的空間再去對付這些狀況吧。",
//     middle: "你的情緒不穩定性介於中間。可參考高分與低分時的說明。",
//     low: "情緒不穩定性較低，感覺你能很好地面對各種場面，讓自己處在良好的狀態呢。不過也要記得，負面情緒其實是益友，不斷在耳邊提醒你遇到不好的事情，讓你有所警覺。",
//   },
// };

const Result = () => {

  const {
  loading,
  categoriesList,
  handleCategoryChange,
  traitsNames,
  // allCategoriesZh,
  // allCategoriesEn,
  targetCategory,
  targetCategoryDescription,
  scoreLevel,
  resultDescription,
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
        className="flex-1"
      />
    </main>
  );
};

export default Result;
