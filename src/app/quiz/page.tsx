import BackBtn from '@/components/shared/backButton';
import QuizClientComponent from './components/QuizClientComponent';
import ContentBox from '@/components/shared/ContentBox';

export default function QuizPage() {
	return (
		<>
			<BackBtn route={'/'} />
			<h1 className="text-4xl font-bold py-4 text-center">...</h1>
			<ContentBox>
				<QuizClientComponent />
			</ContentBox>
		</>
	);
}
