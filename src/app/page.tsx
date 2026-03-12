import ContentBox from '@/components/shared/ContentBox';
import SearchFunction from '@/components/shared/SearchFunction';
import RandomRecipeBtn from '@/components/shared/RandomRecipeBtn';
import QuizBtn from '@/components/shared/QuizBtn';

export default function Home() {
	return (
		<main className="w-full min-h-screen">
			<h1 className="text-4xl font-bold pt-16 pb-8 text-center md:pt-28">
				Vad är du sugen på?
			</h1>

			<div className="px-4">
				<ContentBox>
					<div className="flex-none">
						<SearchFunction />
					</div>

					<div className="flex-none flex flex-col gap-4">
						<div className="divider">ELLER</div>
						<RandomRecipeBtn />
					</div>

					<div className="bg-light-primary/50 p-8 rounded-4xl border border-white/20 flex flex-col items-center gap-4 ">
						<p>Beslutsångest?</p>
						<QuizBtn />
					</div>
				</ContentBox>
			</div>
		</main>
	);
}
