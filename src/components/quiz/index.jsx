import IconButton from "../ui/IconButton";
import LongButton from "../ui/LongButton";
import Question from "./Question";
import OptionList from "./OptionList";
import { useQuizData } from "./useQuizData";

const Quiz = () => {
  const {
    loading,
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedOption,
    traitNames,
    backtoHome,
    handleOptionSelected,
    handlePrevQuestion,
    handleNextQuestion,
  } = useQuizData();

  const isLastQuestion = currentIndex === totalQuestions - 1;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>題目載入中...</p>
      </div>
    );
  }


  return (
  <main className="relative w-full h-screen flex flex-col xl:flex-row">
    <IconButton onClick={handlePrevQuestion} className="absolute" />
    {/* 題目區 */}
      <div className="flex-1 bg-primary/8 h-full flex flex-col justify-between pb-12">
        
        <Question 
          question={currentQuestion.problem} 
          traitNames={traitNames} 
          className="h-full pt-24 xl:pt-0"
          onClick = {backtoHome}
        />
      </div>
      {/* 右側：作答區 */}
      <div className="flex-1 flex flex-col justify-between pt-12 h-full">
        <div className="flex justify-end pr-24">
          <p className="italic font-en text-text-sub text-2xl mb-12">
            {currentIndex + 1}/{totalQuestions}
          </p>
        </div>
        
        <div className="flex flex-col justify-end gap-37.5">
          <OptionList
            options={currentQuestion.options}
            selectedOption={selectedOption}
            onSelect={handleOptionSelected}
          />
          
          <LongButton 
            onClick={handleNextQuestion} 
            disabled={!selectedOption}
          >
            {isLastQuestion ? "計算結果" : "下一題"}
          </LongButton>
        </div>
      </div>
  </main>);
};

export default Quiz;
