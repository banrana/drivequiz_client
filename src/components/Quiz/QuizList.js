import React, { useState, useEffect } from 'react';
import { getQuizzes } from '../../services/api';
import QuizItem from './QuizItem';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await getQuizzes();
        setQuizzes(response.data);
      } catch (error) {
        console.error('Failed to fetch quizzes:', error);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.map(quiz => (
        <QuizItem key={quiz._id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizList;