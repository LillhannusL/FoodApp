import BackBtn from '@/components/shared/backButton';
import QuizClientComponent from './components/QuizClientComponent';
import ContentBox from '@/components/shared/ContentBox';

export default function QuizPage() {
	return (
		<div className="min-h-screen mx-4">
			<BackBtn route={'/'} />
			<div className="flex place-content-center pt-8 pb-24 w-full sm:pt-24">
				<ContentBox>
					<QuizClientComponent />
				</ContentBox>
			</div>
		</div>
	);
}
