'use client';

import { useRouter } from 'next/navigation';
import { useResultStore } from '@/store/useResultStore';

export default function QuizBtn() {
	const router = useRouter();
	const { clearStoredResult } = useResultStore();

	const handleClick = () => {
		clearStoredResult();
		router.push('/quiz');
	};

	return (
		<button
			className="btn btn-wide btn-lg bg-primary-btn border-none rounded-xl shadow-lg"
			onClick={handleClick}
		>
			Take Quiz
		</button>
	);
}
