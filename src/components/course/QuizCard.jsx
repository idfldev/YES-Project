import React, { useState } from 'react';

import quizBuoi1 from '../../db/JSON/quiz.json';


function QuizCard() {
  const quizData = quizBuoi1; 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const question = quizData.quiz[currentQuestion];

  const handleSelect = (index) => {
    setSelected(index);
  };

  const isCorrect = selected !== null && question.answer.includes(selected);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
      <ul className="space-y-2">
        {question.options.map((opt, idx) => (
          <li
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`p-3 rounded cursor-pointer border ${
              selected === idx
                ? isCorrect
                  ? 'bg-green-200 border-green-600'
                  : 'bg-red-200 border-red-600'
                : 'hover:bg-gray-100'
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>

      {selected !== null && (
        <div className="mt-4 text-sm text-gray-600">
          <strong className="block">
            {isCorrect ? '✅ Chính xác!' : '❌ Sai rồi!'}
          </strong>
          <p>{question.explanation}</p>
        </div>
      )}

      <button
        onClick={() => {
          setCurrentQuestion((prev) => Math.min(prev + 1, quizData.quiz.length - 1));
          setSelected(null);
        }}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Tiếp câu hỏi →
      </button>
    </div>
  );
}

export default QuizCard;
