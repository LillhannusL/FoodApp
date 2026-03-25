import ContentBox from '@/components/shared/ContentBox';
import SearchFunction from '@/components/shared/SearchFunction';
import RandomRecipeBtn from '@/components/shared/RandomRecipeBtn';
import QuizBtn from '@/components/shared/QuizBtn';

export default function Home() {
	return (
		<main
			className="w-full min-h-screen px-4 flex flex-col items-center
		"
		>
			<h1 className="text-4xl font-bold pt-10 pb-4 text-center md:pt-28">
				Hungry?
			</h1>
			<h2 className="text-2xl font-semibold pb-4">Dont know what to eat?</h2>

			<div className="w-full flex flex-col items-center">
				<ContentBox>
					<div className="flex-none">
						<h3 className="text-lg font-medium text-center pb-4">
							Search on ingredients
						</h3>
						<SearchFunction />
					</div>

					<div className="divider">OR</div>

					<div className="w-full flex items-center justify-center pb-4">
						<RandomRecipeBtn />
					</div>

					<div className="w-full flex justify-center">
						<div className="w-full flex flex-col justify-center items-center gap-4 bg-light-primary/40 rounded-4xl border border-white/70 p-6 sm:max-w-4xl sm:py-12">
							<p className="text-2xl font-semibold">Can't decide?</p>
							<QuizBtn />
						</div>
					</div>
				</ContentBox>
			</div>
		</main>
	);
}
