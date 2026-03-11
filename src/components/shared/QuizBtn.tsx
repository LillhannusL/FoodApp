'use client';

export default function QuizBtn() {
	const handleClick = () => {
		console.log('click');
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
