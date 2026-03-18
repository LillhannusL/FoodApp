import Image from 'next/image';

export const EnergyQuestion = ({
	onAnswer,
}: {
	onAnswer: (val: string) => void;
}) => (
	// Question
	<div className="flex flex-col gap-6">
		<h1 className="text-4xl font-bold text-center">
			What's your energy level?
		</h1>

		{/* answer */}
		<div className="grid grid-cols-1 gap-8 pt-4">
			<button
				onClick={() => onAnswer('high')}
				className="btn btn-ghost flex flex-col h-auto hover:bg-transparent hover:shadow-none group"
			>
				<Image
					src="/images/feelingGood.png"
					width={80}
					height={80}
					alt="Feeling Good"
					className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform"
				/>
				<span className="text-xl font-bold">Chef Mode</span>
				<span className="text-sm opacity-70">
					I've got time (Anything goes)
				</span>
			</button>
			<button
				onClick={() => onAnswer('medium')}
				className="btn btn-ghost flex flex-col h-auto border-none hover:bg-transparent hover:shadow-none group"
			>
				<Image
					src="/images/doingOkay.png"
					width={80}
					height={80}
					alt="Medium Energy"
					className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform"
				/>
				<span className="text-xl font-bold">Balanced</span>
				<span className="text-sm opacity-70">Standard cooking (~30 min)</span>
			</button>
			<button
				onClick={() => onAnswer('low')}
				className="btn btn-ghost flex flex-col h-auto border-none hover:bg-transparent hover:shadow-none group"
			>
				<Image
					src="/images/drained.png"
					width={80}
					height={80}
					alt="Low Energy"
					className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform"
				/>
				<span className="text-xl font-bold">Low Battery</span>
				<span className="text-sm opacity-70">Quick & Effortless (~15 min)</span>
			</button>
		</div>
	</div>
);

export const CravingQuestion = ({
	onAnswer,
}: {
	onAnswer: (val: string) => void;
}) => (
	<div>
		{/* Question */}
		<h1 className="col-span-1 text-center text-4xl font-bold pt-4 pb-12">
			What are you craving?
		</h1>

		{/* Answers */}
		<div className="w-full grid grid-cols-1 gap-6">
			<button
				onClick={() => onAnswer('hearty')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-primary-btn"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-pizza-icon lucide-pizza"
				>
					<path d="m12 14-1 1" />
					<path d="m13.75 18.25-1.25 1.42" />
					<path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
					<path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
					<path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
				</svg>
				<span className="text-xl font-semibold">Hearty & Cozy</span>
			</button>

			<button
				onClick={() => onAnswer('fresh')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-green-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-salad-icon lucide-salad"
				>
					<path d="M7 21h10" />
					<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
					<path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
					<path d="m13 12 4-4" />
					<path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
				</svg>
				<span className=" text-xl font-semibold">Light & Fresh</span>
			</button>

			<button
				onClick={() => onAnswer('spicy')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-red-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-flame-icon lucide-flame"
				>
					<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
				</svg>
				<span className=" text-xl font-semibold">Bold & Spicy</span>
			</button>

			<button
				onClick={() => onAnswer('surprise')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-lightBlue-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-zap-icon lucide-zap"
				>
					<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
				</svg>
				<span className=" text-xl font-semibold">Surprise Me!</span>
			</button>
		</div>
	</div>
);

// export const TimeQuestion = ({
// 	onAnswer,
// }: {
// 	onAnswer: (val: string) => void;
// }) => (
// 	<div>
// 		{/* Question */}
// 		<h1 className="col-span-1 text-center text-4xl font-bold pt-10 pb-12">
// 			How much time do you have?
// 		</h1>

// 		{/* Answers */}
// 		<div className="w-full grid grid-cols-1 gap-6">
// 			<button
// 				onClick={() => onAnswer('15')}
// 				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-red-gradient"
// 			>
// 				<svg
// 					xmlns="http://www.w3.org/2000/svg"
// 					width="35"
// 					height="35"
// 					viewBox="0 0 24 24"
// 					fill="none"
// 					stroke="currentColor"
// 					strokeWidth="2"
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 					className="lucide lucide-clock3-icon lucide-clock-3"
// 				>
// 					<circle cx="12" cy="12" r="10" />
// 					<path d="M12 6v6h4" />
// 				</svg>
// 				<span className="text-xl font-semibold">10 - 15 minutes</span>
// 			</button>
// 			<button
// 				onClick={() => onAnswer('30')}
// 				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-blue-gradient"
// 			>
// 				<svg
// 					xmlns="http://www.w3.org/2000/svg"
// 					width="35"
// 					height="35"
// 					viewBox="0 0 24 24"
// 					fill="none"
// 					stroke="currentColor"
// 					strokeWidth="2"
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 					className="lucide lucide-clock6-icon lucide-clock-6"
// 				>
// 					<circle cx="12" cy="12" r="10" />
// 					<path d="M12 6v10" />
// 				</svg>
// 				<span className="text-xl font-semibold">20 - 30 minutes</span>
// 			</button>
// 			<button
// 				onClick={() => onAnswer('45')}
// 				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-darkGreen-gradient"
// 			>
// 				<svg
// 					xmlns="http://www.w3.org/2000/svg"
// 					width="35"
// 					height="35"
// 					viewBox="0 0 24 24"
// 					fill="none"
// 					stroke="currentColor"
// 					strokeWidth="2"
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 					className="lucide lucide-clock8-icon lucide-clock-8"
// 				>
// 					<circle cx="12" cy="12" r="10" />
// 					<path d="M12 6v6l-4 2" />
// 				</svg>
// 				<span className="text-xl font-semibold">30+ minutes</span>
// 			</button>
// 		</div>
// 	</div>
// );

export const DishPreference = ({
	onAnswer,
}: {
	onAnswer: (val: string) => void;
}) => (
	<div>
		{/* Question */}
		<h1 className="col-span-1 text-center text-4xl font-bold pt-8 pb-8">
			Do you have any course in mind?
		</h1>

		{/* Answers */}
		<div className="w-full grid grid-cols-1 gap-4">
			<button
				onClick={() => onAnswer('breakfast')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-green-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-egg-fried-icon lucide-egg-fried"
				>
					<circle cx="11.5" cy="12.5" r="3.5" />
					<path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
				</svg>
				<span className="text-xl font-semibold">Breakfast</span>
			</button>
			<button
				onClick={() => onAnswer('main')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-red-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-hamburger-icon lucide-hamburger"
				>
					<path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" />
					<path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" />
					<path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" />
					<path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
				</svg>
				<span className="text-xl font-semibold">Meal</span>
			</button>
			<button
				onClick={() => onAnswer('dessert')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-pink-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-cake-slice-icon lucide-cake-slice"
				>
					<path d="M16 13H3" />
					<path d="M16 17H3" />
					<path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" />
					<circle cx="9" cy="7" r="2" />
				</svg>
				<span className="text-xl font-semibold">Dessert</span>
			</button>
			<button
				onClick={() => onAnswer('snack')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-orange-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-popcorn-icon lucide-popcorn"
				>
					<path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
					<path d="M10 22 9 8" />
					<path d="m14 22 1-14" />
					<path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
				</svg>
				<span className="text-xl font-semibold">Snack</span>
			</button>
			<button
				onClick={() => onAnswer('all')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-blue-gradient"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-cooking-pot-icon lucide-cooking-pot"
				>
					<path d="M2 12h20" />
					<path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
					<path d="m4 8 16-4" />
					<path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
				</svg>
				<span className="text-xl font-semibold">Anything</span>
			</button>
		</div>
	</div>
);
export const DietPreference = ({
	onAnswer,
}: {
	onAnswer: (val: string) => void;
}) => (
	<div>
		{/* Question */}
		<h1 className="col-span-1 text-center text-4xl font-bold pt-10 pb-12">
			Special diet or preference?
		</h1>

		{/* Answers */}
		<div className="w-full grid grid-cols-1 gap-4">
			<button
				onClick={() => onAnswer('vegetarian')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-green-gradient"
			>
				<span className="text-xl font-semibold">Vegetarian</span>
			</button>
			<button
				onClick={() => onAnswer('vegan')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-darkGreen-gradient"
			>
				<span className="text-xl font-semibold">Vegan</span>
			</button>
			<button
				onClick={() => onAnswer('glutenFree')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-yellow-gradient"
			>
				<span className="text-xl font-semibold">Gluten free</span>
			</button>
			<button
				onClick={() => onAnswer('')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-lightBlue-gradient"
			>
				<span className="text-xl font-semibold">No preference</span>
			</button>
		</div>
	</div>
);
