import IconButton from "../components/ui/IconButton";
import LongButton from "../components/ui/LongButton";
import Question from "../components/quiz/Question";
import OptionList from "../components/quiz/OptionList";
import { useQuizData } from "../components/quiz/useQuizData";

const Quiz = () => {
  const {
    loading,
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedOption,
    traitName,
    handleOptionSelect,
    handlePrev,
    handleNext,
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
  <main className="w-full h-screen flex flex-col lg:flex-row">
    <IconButton onClick={handlePrev} />
    {/* 題目區 */}
      <div className="flex-1 bg-primary/8 h-full flex flex-col justify-between pb-12">
        
        <Question 
          question={currentQuestion.problem} 
          traitName={traitName} 
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
            handleOptionSelect={handleOptionSelect}
          />
          
          <LongButton 
            onClick={handleNext} 
            disabled={!selectedOption}
          >
            {isLastQuestion ? "計算結果" : "下一題"}
          </LongButton>
        </div>
      </div>
  </main>);
};

export default Quiz;
