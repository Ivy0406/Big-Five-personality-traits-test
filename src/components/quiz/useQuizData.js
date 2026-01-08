import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getTraitsData from "../../data/traits-data";

export const useQuizData = () => {
  const navigate = useNavigate();
  const [traitsData, setTraitsData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getTraitsData();
        setTraitsData(res);
        const allQuestions = Object.values(res.problemList).flatMap(
          (category) => category.problems
        );
        setQuestions(allQuestions);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  const getSavedOption = (targetIndex, currentQuestions = questions) => {
    const targetQuestion = currentQuestions[targetIndex];
    if (!targetQuestion) return null;
    const savedAnswer = answers[targetQuestion.id];

    if (savedAnswer) {
      return (
        targetQuestion.options.find(
          (option) => option.fraction === savedAnswer.score
        ) || null
      );
    }
    return null;
  };

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSelectedOption(getSavedOption(prevIndex));
    } else {
      navigate("/");
    }
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentIndex];
    if (!currentQuestion) return;

    //本題答案
    const currentAnswerEntry = {
      category: currentQuestion.category,
      score: selectedOption.fraction,
    };
    // 將本題答案存入
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: currentAnswerEntry,
    }));

    // 是否要結算
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(getSavedOption(nextIndex));
    } else {
      const finalAnswers = {
        ...answers,
        [currentQuestion.id]: {
          category: currentQuestion.category,
          score: selectedOption.fraction,
        },
      };
      console.log(finalAnswers);
    }
  };

  const traitNames = traitsData ? {
    zh: traitsData.name.zh.split("(")[0].trim(),
    en: traitsData.name.en.split("(")[0].trim()
  } : { zh: "", en: "" };

  return {
    loading: !traitsData || questions.length === 0,
    currentQuestion: questions[currentIndex],
    currentIndex,
    totalQuestions: questions.length,
    selectedOption,
    traitNames,
    handleOptionSelected,
    handlePrevQuestion,
    handleNextQuestion,
  };
};

