import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onCorrectAnswerChange }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onCorrectAnswerChange={onCorrectAnswerChange}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
