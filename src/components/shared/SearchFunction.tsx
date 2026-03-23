'use client';

import { useState } from 'react';
import { useIngredientsStore } from '@/store/useIngredientsStore';
import { useRouter } from 'next/navigation';

export default function SearchFunction() {
	const router = useRouter();
	const [inputValue, setInputValue] = useState('');
	const [ingredients, setIngredients] = useState<string[]>([]);
	const { setStoreIngredients } = useIngredientsStore();

	const colors = ['bg-green-gradient', 'bg-red-gradient', 'bg-orange-gradient'];

	const addIngredient = () => {
		if (inputValue.trim() === '') return;
		setIngredients((prev) => [...prev, inputValue]);
		setInputValue('');
	};

	const deleteItem = (indexClicked: number) => {
		setIngredients(ingredients.filter((_, index) => index !== indexClicked));
	};

	const handleSearchClick = () => {
		setStoreIngredients(ingredients);
		router.push('/results?type=search');
	};

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<label className="input input-bordered flex items-center gap-4 rounded-full h-18 bg-light-primary/60 backdrop-blur-md shadow-inner focus-within:outline-none sm:w-full sm:max-w-4xl border-none">
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
					className="lucide lucide-search-icon lucide-search"
				>
					<path d="m21 21-4.34-4.34" />
					<circle cx="11" cy="11" r="8" />
				</svg>
				<input
					type="search"
					placeholder="tomato"
					className="grow bg-transparent focus:outline-none"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') addIngredient();
					}}
				/>
				<button
					className="btn btn-circle border-none bg-blue-gradient text-xl hover:scale-110 transition-transform"
					onClick={addIngredient}
				>
					+
				</button>
			</label>

			<div className="mt-4">
				<ul className="flex flex-wrap gap-2">
					{ingredients.map((ingredient, index) => (
						<li
							key={index}
							className={`badge badge-lg gap-2 p-4 rounded-2xl bg-white/10 backdrop-blur-md border-none text-light-primary shadow-md ${colors[index % 3]}`}
						>
							<span>{ingredient}</span>
							<button
								className="hover:text-error transition-colors font-bold ml-1"
								onClick={() => deleteItem(index)}
							>
								X
							</button>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full flex justify-center pt-10">
				{ingredients.length > 0 && (
					<button
						className="btn btn-xl btn-block border-none text-xl bg-primary-btn rounded-xl shadow-md mt-4 sm:max-w-4xl"
						onClick={handleSearchClick}
					>
						Search recipe
					</button>
				)}
			</div>
		</div>
	);
}
