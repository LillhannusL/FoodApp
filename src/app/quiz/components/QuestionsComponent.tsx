import Image from 'next/image';

export const EnergyQuestion = ({
	onAnswer,
}: {
	onAnswer: (val: string) => void;
}) => (
	// Question
	<div className="flex flex-col gap-6">
		<h1 className="text-4xl font-bold text-center">
			How are you feeling today?
		</h1>

		{/* answer */}
		<div className="grid grid-cols-1 gap-8 pt-4">
			<button
				onClick={() => onAnswer('feelingGood')}
				className="btn btn-ghost flex flex-col border-none h-auto hover:bg-transparent hover:shadow-none group"
			>
				<Image
					src="/images/feelingGood.png"
					width={80}
					height={80}
					alt="Feeling Good"
					className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform"
				/>
				<span>Feeling Good</span>
			</button>
			<button
				onClick={() => onAnswer('doingOkay')}
				className="btn btn-ghost flex flex-col h-auto border-none hover:bg-transparent hover:shadow-none group"
			>
				<Image
					src="/images/doingOkay.png"
					width={80}
					height={80}
					alt="Doing Okay"
					className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform"
				/>
				<span>Doing Okay</span>
			</button>
			<button
				onClick={() => onAnswer('Drained')}
				className="btn btn-ghost flex flex-col h-auto border-none hover:bg-transparent hover:shadow-none group"
			>
				<Image
					src="/images/drained.png"
					width={80}
					height={80}
					alt="Drained"
					className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform"
				/>
				<span>Drained</span>
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
			Do you crave anything specific?
		</h1>

		{/* Answers */}
		<div className="w-full grid grid-cols-1 gap-6">
			<button
				onClick={() => onAnswer('comfort')}
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
				<span className="text-xl font-semibold">Comfort food</span>
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
				<span className=" text-xl font-semibold">Fresh & Crispy</span>
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
				<span className=" text-xl font-semibold">Spicy</span>
			</button>

			<button
				onClick={() => onAnswer('fast')}
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
				<span className=" text-xl font-semibold">Fast & Easy</span>
			</button>
		</div>
	</div>
);

export const TimeQuestion = ({
	onAnswer,
}: {
	onAnswer: (val: string) => void;
}) => (
	<div>
		{/* Question */}
		<h1 className="col-span-1 text-center text-4xl font-bold pt-10 pb-12">
			How much time do you have?
		</h1>

		{/* Answers */}
		<div className="w-full grid grid-cols-1 gap-6">
			<button
				onClick={() => onAnswer('15')}
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
					className="lucide lucide-clock3-icon lucide-clock-3"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 6v6h4" />
				</svg>
				<span className="text-xl font-semibold">10 - 15 minutes</span>
			</button>
			<button
				onClick={() => onAnswer('30')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-blue-gradient"
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
					className="lucide lucide-clock6-icon lucide-clock-6"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 6v10" />
				</svg>
				<span className="text-xl font-semibold">20 - 30 minutes</span>
			</button>
			<button
				onClick={() => onAnswer('45')}
				className="flex items-center justify-around border border-white/50 p-4 rounded-xl shadow-md/20 bg-darkGreen-gradient"
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
					className="lucide lucide-clock8-icon lucide-clock-8"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 6v6l-4 2" />
				</svg>
				<span className="text-xl font-semibold">+ 30 minutes</span>
			</button>
		</div>
	</div>
);
