'use client';

import { quizData } from '@/data/quizData';
import { useState } from 'react';
import type { QuestionType, answerType } from '@/types';
import {
	EnergyQuestion,
	CravingQuestion,
	TimeQuestion,
} from '@/app/quiz/components/QuestionsComponent';

export default function QuizClientComponent() {
	// const [currentQuestion, setCurrentQuestion] = useState(0);
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState({});
	// const [isFinished, setIsFinished] = useState(false);

	// const question: QuestionType = quizData[currentQuestion];

	// const handleAnswer = (option: answerType) => {
	// 	// Save answer
	// 	setAnswers((prev) => ({
	// 		...prev,
	// 		[currentQuestion]: option.text,
	// 	}));

	// 	// Go to next question or finish
	// 	if (currentQuestion < quizData.length - 1) {
	// 		setCurrentQuestion((prev) => prev + 1);
	// 	} else {
	// 		setIsFinished(true);
	// 		console.log(answers);
	// 	}
	// };

	const handleNext = (val: string) => {
		setAnswers({ ...answers, [step]: val });
		setStep(step + 1);
	};

	if (step > 2) {
		return (
			<section className="text-center pt-28">
				<h1 className="text-4xl font-bold">The Quiz is done!</h1>
				<p className="mt-4">
					We are working on finding recipes that match your energy...
				</p>
				<button
					className="btn bg-orange-gradient mt-8"
					onClick={() => window.location.reload()}
				>
					Take Quiz again
				</button>
			</section>
		);
	}

	return (
		<section className="max-w-4xl mx-auto">
			{/* progress bar */}
			<div className="flex flex-col items-center gap-4">
				<progress
					className="progress progress-warning w-full"
					value={((step + 1) / quizData.length) * 100}
					max={100}
				></progress>
				<span className="text-sm font-semibold uppercase text-light-primary">
					{`Fråga ${step + 1} av ${quizData.length}`}
				</span>
			</div>

			{step === 0 && <EnergyQuestion onAnswer={handleNext} />}
			{step === 1 && <CravingQuestion onAnswer={handleNext} />}
			{step === 2 && <TimeQuestion onAnswer={handleNext} />}
		</section>
	);
}
