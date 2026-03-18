import BackBtn from '@/components/shared/backButton';
import QuizClientComponent from './components/QuizClientComponent';
import ContentBox from '@/components/shared/ContentBox';

export default function QuizPage() {
	return (
		<div className="min-h-screen">
			<BackBtn route={'/'} />
			<div className="pt-8 pb-24">
				<ContentBox>
					<QuizClientComponent />
				</ContentBox>
			</div>
		</div>
	);
}
