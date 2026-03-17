'use client';

import { useRouter } from 'next/navigation';

export default function QuizBtn() {
	const router = useRouter();

	const handleClick = () => {
		router.push('/quiz');
	};

	return (
		<button
			className="btn btn-wide btn-lg bg-primary-btn border-none rounded-xl"
			onClick={handleClick}
		>
			Gör Quizet
		</button>
	);
}
