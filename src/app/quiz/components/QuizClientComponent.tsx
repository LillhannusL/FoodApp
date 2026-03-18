'use client';

import { useState } from 'react';
import {
	EnergyQuestion,
	CravingQuestion,
	DishPreference,
	DietPreference,
} from '@/app/quiz/components/QuestionsComponent';
import { useQuizStore } from '@/store/useQuizStore';
import { useRouter } from 'next/navigation';

export default function QuizClientComponent() {
	const router = useRouter();
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState({});
	const { setResult } = useQuizStore();

	const totalSteps = 4;

	const handleNext = (val: string) => {
		const updatedAnswers = { ...answers, [step]: val };
		setAnswers(updatedAnswers);

		setStep(step + 1);
	};

	const handleClick = () => {
		setResult(answers);
		router.push('/results?type=quiz');
	};

	if (step >= totalSteps) {
		return (
			<section className="text-center pt-28 flex flex-col">
				<h1 className="text-4xl font-bold">The Quiz is done!</h1>
				<p className="mt-4">
					We've analyzed your energy and cravings. Ready for your recipes?
				</p>
				<button className="btn my-4" onClick={handleClick}>
					See recipes
				</button>
				<button
					className="btn bg-orange-gradient mt-8 "
					onClick={() => window.location.reload()}
				>
					Start Over
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
					value={((step + 1) / totalSteps) * 100}
					max={100}
				></progress>
				<span className="text-sm font-semibold uppercase text-light-primary">
					{`Question ${step + 1} of ${totalSteps}`}
				</span>
			</div>

			{step === 0 && <DishPreference onAnswer={handleNext} />}
			{step === 1 && <DietPreference onAnswer={handleNext} />}
			{step === 2 && <CravingQuestion onAnswer={handleNext} />}
			{step === 3 && <EnergyQuestion onAnswer={handleNext} />}
		</section>
	);
}
