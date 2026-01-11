import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getTraitsData from "../../data/traits-data";

export const useResultData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rawAnswers = location.state?.answers;
  console.log(rawAnswers);
  const [traitsData, setTraitsData] = useState(null);
  const [targetCategory, setTargetCategory] = useState(null);

  useEffect(() => {
    if (!rawAnswers) {
      navigate("/");
      return;
    }
    const loadData = async () => {
      try {
        const res = await getTraitsData();
        setTraitsData(res);
        const firstCategoryKey = res.traits.en[0];
        setTargetCategory(firstCategoryKey);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [rawAnswers, navigate]);

  const calculatedResuts = useMemo(() => {
    if (!traitsData || !rawAnswers) {
      return null;
    }

    const traitResults = {};

    const categoryKeysZh = traitsData.traits.zh;
    const categoryKeysEn = traitsData.traits.en;

    categoryKeysEn.forEach((key, index) => {
      const categoryDetails = traitsData.problemList[key];
      if (!categoryDetails) return;

      const categoryAnswers = Object.values(rawAnswers).filter(
        (answer) => answer.category === key
      );

      const sumScore = categoryAnswers.reduce(
        (sum, answer) => sum + answer.score,
        0
      );

      let level = "";
      if (sumScore > 6) {
        level = "high";
      } else if (sumScore === 6) {
        level = "middle";
      } else {
        level = "low";
      }

      traitResults[key] = {
        zhName: categoryKeysZh[index],
        enName: key,
        scoreLevel: level === "high" ? "高" : level === "middle" ? "中" : "低",
        targetCategoryDescription: categoryDetails.description.desc,
        resultDescription: categoryDetails.description[level],
      };
    });
    return traitResults;
  }, [traitsData, rawAnswers]);

  const categoriesList = useMemo(() => {
    if (!traitsData?.traits) {
      return [];
    } else {
      return traitsData.traits.en.map((categoryKey, index) => ({
        key: categoryKey,
        zhCategoryName: traitsData.traits.zh[index],
      }));
    }
  }, [traitsData]);

  const currentRenderData = calculatedResuts?.[targetCategory];

  return {
    loading: !traitsData || !calculatedResuts,
    categoriesList, 
    handleCategoryChange: (key) => setTargetCategory(key),
    traitsNames: traitsData?.name,
    allCategoriesZh: traitsData?.traits.zh || [],
    allCategoriesEn: traitsData?.traits.en || [],
    targetCategory: {
      en: currentRenderData?.enName,
      zh: currentRenderData?.zhName,
    },
    targetCategoryDescription: currentRenderData?.targetCategoryDescription,
    scoreLevel: currentRenderData?.scoreLevel,
    resultDescription: currentRenderData?.resultDescription
  };
};
