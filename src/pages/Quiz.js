import React from 'react';
import {useState} from 'react';
import './Quiz.css';

export function Multi_choice_quiz() {
  const questions = [
    {
      questionText: 'What is Ashley\'s last name?',
      answerOptions: [
        { answerText: 'Kim', isCorrect: true },
        { answerText: 'Golden', isCorrect: false },
        { answerText: 'Lee', isCorrect: false },
        { answerText: 'K', isCorrect: false },
      ],
    },
    {
      questionText: 'What is Otis\'s last name?',
      answerOptions: [
        { answerText: 'Kim', isCorrect: false },
        { answerText: 'Golden', isCorrect: true },
        { answerText: 'Triangle', isCorrect: false },
        { answerText: 'Ratio', isCorrect: false },
      ],
    },
    {
      questionText: 'What is this app made from?',
      answerOptions: [
        { answerText: 'Paper', isCorrect: false },
        { answerText: 'Water', isCorrect: false },
        { answerText: 'ChatGPT', isCorrect: false },
        { answerText: 'ReactJS', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the color of the sky?',
      answerOptions: [
        { answerText: 'Black', isCorrect: false },
        { answerText: 'Red', isCorrect: false },
        { answerText: 'Blue', isCorrect: true },
        { answerText: 'Green', isCorrect: false },
      ],
    },
    {
      questionText: 'How old are you?',
      answerOptions: [
        { answerText: '20', isCorrect: true },
        { answerText: '19', isCorrect: false },
        { answerText: '21', isCorrect: false },
        { answerText: '18', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const answerClickOption = (isCorrect) => {
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
    <div className = 'app'>
      {showScore ? (
        <div className = 'score-section'>
          You scored {score} out of {questions.length}
        </div>
        ) : (
          <>
            <div className = 'question-section'>
              <div className = 'question-count'>
                <span> Question {currentQuestion + 1} </span>/{questions.length}
              </div>
              <div className = 'question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className = 'answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick = {() => answerClickOption(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
      )}
    </div>
  );
}
