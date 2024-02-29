import questions, { addQuestion } from "@/redux/questions";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Måste lägga in så att man clearar textfältet efter att man klickat nästa fråga

export default function admintest() {
  const [question, setQuestion] = useState({
    questionTitle: "",
    options: ["", "", "", ""],
    answer: "",
  });

  const dispatch = useDispatch();

  const handleQuestionChange = (e) => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      questionTitle: e.target.value,
    }));
  };

  const handleAnswerChange = (e) => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      answer: e.target.value,
    }));
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...question.options];
    newOptions[index] = e.target.value;

    setQuestion({ ...question, options: newOptions });
  };

  function handleAddQuestion() {
    dispatch(addQuestion(question));
  }

  return (
    <div>
      <input
        onChange={handleQuestionChange}
        value={question.question}
        type="text"
        placeholder="Question title"
      />
      <input
        onChange={(e) => handleOptionChange(e, 0)}
        type="text"
        placeholder="Option 1"
      />
      <input
        onChange={(e) => handleOptionChange(e, 1)}
        type="text"
        placeholder="Option 2"
      />
      <input
        onChange={(e) => handleOptionChange(e, 2)}
        type="text"
        placeholder="Option 3"
      />
      <input
        onChange={(e) => handleOptionChange(e, 3)}
        type="text"
        placeholder="Option 4"
      />

      <input onChange={handleAnswerChange} type="text" placeholder="Answer" />

      <button onClick={handleAddQuestion}>Nästa Fråga</button>
    </div>
  );
}
