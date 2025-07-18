import React from "react";

function QuestionItem({ question, onDeleteQuestion, onCorrectAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleSelectChange(e) {
    const newIndex = parseInt(e.target.value);
    onCorrectAnswerChange(id, newIndex);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          value={correctIndex}
          onChange={handleSelectChange}
          aria-label="Correct Answer"
        >
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => onDeleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
