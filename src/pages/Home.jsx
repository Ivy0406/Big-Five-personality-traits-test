import TraitHero from "../components/result/TraitHero";
import ShortButton from "../components/ui/ShortButton";

function Home() {
  return (
    <>
      <TraitHero traitType="home" />
      <div className="bg-neutral-main w-full py-24 px-5">
        <div className="w-full max-w-352.5 mx-auto flex flex-col items-center gap-4">
          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-end">
            <h1 className="text-center lg:text-left text-5xl lg:text-[64px] leading-normal font-light text-text-main">
              五大性格特質
              <br className="hidden lg:block" />
              心理測驗
            </h1>
            <div className="flex justify-center items-center text-xl lg:text-2xl font-light text-text-main w-fit h-auto lg:h-23.5 lg:-ml-[7.5%]"><p className="w-full">Big Five personality<br className="hidden lg:block"/>traits test</p></div>
          </div>
          <div className="w-full flex flex-col items-center lg:flex-row lg:justify-end gap-7.5">
            <p className="text-[16px] leading-normal text-text-sub w-full max-w-150 lg:w-112.5">
              五大性格特質（Big Five personality
              traits）在心理學中常被作為人格的評估，有時也會用來預測學業成就、以及作為適合職業的參考。此理論認為人的主要性格由五項人格特質組成：經驗開放性、盡責性、外向性、親和性、情緒不穩定性。
            </p>
            <ShortButton className="lg:min-w-82.5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
