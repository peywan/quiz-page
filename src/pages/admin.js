//This is the UI for the Admin (what the admin will see)
import { useState } from "react";

const AdminPage = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), text: newQuestion }]);
    setNewQuestion("");
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const updateQuestion = (id, updatedText) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, text: updatedText } : question
      )
    );
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="New question"
      />
      <button onClick={addQuestion}>Add Question</button>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <input
              type="text"
              defaultValue={question.text}
              onBlur={(e) => updateQuestion(question.id, e.target.value)}
            />
            <button onClick={() => removeQuestion(question.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
