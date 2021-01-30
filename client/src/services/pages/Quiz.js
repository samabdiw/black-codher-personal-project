import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './quiz.css';

export default function App() {
	const questions = [
		{
			questionText: 'Question number 1?',
			answerOptions: [
				{ answerText: 'Answer1', isCorrect: false },
				{ answerText: 'Answer2', isCorrect: false },
				{ answerText: 'Answer3', isCorrect: true },
				{ answerText: 'Answer4', isCorrect: false },
			],
		},
		{
			questionText: 'Question number 2?',
			answerOptions: [
				{ answerText: 'Answer1', isCorrect: false },
				{ answerText: 'Answer2', isCorrect: true },
				{ answerText: 'Answer3', isCorrect: false },
				{ answerText: 'Answer4', isCorrect: false },
			],
		},
		{
			questionText: 'Question number 3?',
			answerOptions: [
				{ answerText: 'Answer1', isCorrect: true },
				{ answerText: 'Answer2', isCorrect: false },
				{ answerText: 'Answer3', isCorrect: false },
				{ answerText: 'Answer4', isCorrect: false },
			],
		},
		{
			questionText: 'Question number 4?',
			answerOptions: [
				{ answerText: 'Answer1', isCorrect: false },
				{ answerText: 'Answer2', isCorrect: false },
				{ answerText: 'Answer3', isCorrect: false },
				{ answerText: 'Answer4', isCorrect: true },
			],
		},
	];

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
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}