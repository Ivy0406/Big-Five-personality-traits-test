import { useState, useEffect } from "react";
import TraitHero from "../components/result/TraitHero";
import ShortButton from "../components/ui/ShortButton";
import getTraitsData from "../data/traits-data";

function Home() {
  const [traitsData, setTraitsData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getTraitsData();
        setTraitsData(res);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  if (!traitsData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-neutral-white">
        <p className="text-xl text-text-sub">
          資料載入中...
          <br />
          Loading...
        </p>
      </div>
    );
  }

  const {name, description} = traitsData;

  const cleanZhName = name.zh.split("(")[0].trim();
  const zhNameLine = {
    firstLine: cleanZhName.slice(0,6),
    secondLine: cleanZhName.slice(6)
    };

  const cleanEnName = name.en.split("(")[0].trim();
  const sliceIndex = cleanEnName.indexOf("traits");
  const enNameLine = {
    firstLine: cleanEnName.slice(0,sliceIndex).trim(),
    secondLine: cleanEnName.slice(sliceIndex).trim()
  }

  return (
    <>
      <TraitHero traitType="home" />
      <div className="bg-neutral-main w-full py-24 px-5">
        <div className="w-full max-w-352.5 mx-auto flex flex-col items-center gap-4">
          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-end">
            <h1 className="text-center lg:text-left text-5xl lg:text-[64px] leading-normal font-light text-text-main">
              {zhNameLine.firstLine}
              <br className="hidden lg:block" />
              {zhNameLine.secondLine}
            </h1>
            <div className="flex justify-center items-center text-xl lg:text-2xl font-light text-text-main w-fit h-auto lg:h-23.5 lg:-ml-[7.5%]">
              <p className="w-full">
                {enNameLine.firstLine}
                <br className="hidden lg:block" />
                {enNameLine.secondLine}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center lg:flex-row lg:justify-end gap-7.5">
            <p className="text-[16px] leading-normal text-text-sub w-full max-w-150 lg:w-112.5">
              {description}
            </p>
            <ShortButton className="lg:min-w-82.5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
