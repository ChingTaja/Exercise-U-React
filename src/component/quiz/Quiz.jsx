import { useState } from 'react';
import QUESTIONS from './question';
import quizCompleteImg from '../../assets/quiz/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((preUserAnswer) => {
      return [...preUserAnswer, selectedAnswer];
    });
  }

  // complete
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
