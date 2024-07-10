import React from 'react';
import { Link } from 'react-router-dom';

const QuizItem = ({ quiz }) => {
  return (
    <div>
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <Link to={`/quiz/${quiz._id}`}>Take Quiz</Link>
    </div>
  );
};

export default QuizItem;