// This is the component for the quiz-logic to be uses on the user-side (index.js)
//So its responsible for displaying questions, handling answers, and showing the results.
import { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz p-6 max-w-xl mx-auto bg-gray-800 rounded-lg shadow-md">
      {showScore ? (
        <div className="quiz-score text-center text-3xl font-bold text-white">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="quiz-question text-2xl text-white mb-4">
            {questions[currentQuestion].questionText}
          </div>
          <div className="quiz-answers">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  className="w-full py-2 px-4 mb-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
          <div className="quiz-controls mt-4">
            {currentQuestion !== 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="w-[49%] py-3 bg-indigo-600 rounded-lg"
              >
                Previous
              </button>
            )}
            {!showScore && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                className="w-[49%] py-3 bg-indigo-600 rounded-lg ml-2"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
