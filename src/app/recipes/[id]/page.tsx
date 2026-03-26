'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { fetchRecipeByID } from '@/services/recipeApi';
import ContentBox from '@/components/shared/ContentBox';
import type { RecipeData } from '@/types/index';
import Instructions from '@/app/recipes/[id]/components/Instructions';
import IngredientsList from '@/app/recipes/[id]/components/IngredientsList';
import Image from 'next/image';
import FavoritesButton from '@/components/shared/favoriteButton';
import BackBtn from '@/components/shared/backButton';

type PageParams = Promise<{ id: string }>;

export default function Recipe({ params }: { params: PageParams }) {
	const { id } = React.use(params);
	const [recipe, setRecipe] = useState<RecipeData | null>(null);
	const [loading, setLoading] = useState(true);

	//Fetch recipe from id
	useEffect(() => {
		if (!id) return;
		let isIgnore = false;

		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await fetchRecipeByID(id);
				if (!isIgnore) {
					setRecipe(data);
					setLoading(false);
				}
			} catch (error) {
				if (!isIgnore) {
					console.error('Fel vid hämtning:', error);
				}
			} finally {
				setLoading(false);
			}
		};
		fetchData();

		return () => {
			isIgnore = true;
		};
	}, [id]);

	if (loading) {
		return (
			<div className="w-full flex justify-center items-center flex-col gap-4">
				<div className="skeleton h-96 w-full"></div>
			</div>
		);
	}

	if (!recipe) {
		return <p>Recipe not found...</p>;
	}

	const ingredientCount = recipe.extendedIngredients.length;

	return (
		<section className="sm:flex sm:flex-col sm:items-center">
			<Image
				src={recipe.image}
				alt={recipe.title}
				width={500}
				height={500}
				className="relative sm:pt-32 rounded-b-xl object-scaling-down"
			/>
			<div className="absolute z-10 top-0 w-full flex items-center justify-between px-4">
				<BackBtn route="/results?type=random" />
				<FavoritesButton recipe={recipe} />
			</div>
			<div className="z-2 absolute top-35 font-bold text-2xl space-y-2 p-2 sm:top-85">
				<div className="flex gap-4">
					<span className="badge bg-green-gradient border-none p-4 rounded-full shadow-md">
						{recipe.readyInMinutes} min
					</span>
					<span className="badge bg-green-gradient border-none p-4 rounded-full shadow-md">
						{recipe.servings} port
					</span>
					<span className="badge bg-green-gradient border-none p-4 rounded-full shadow-md">
						{ingredientCount} Ingr
					</span>
				</div>
				<h1 className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-lg text-dark-primary">
					{recipe.title}
				</h1>
			</div>

			<div className="flex flex-col gap-4 p-4 pb-24">
				<ContentBox>
					<IngredientsList ingredients={recipe.extendedIngredients} />

					{recipe.dishTypes && (
						<div className="flex flex-wrap gap-2">
							{recipe.dishTypes.map((type: string) => (
								<span key={type} className="badge badge-outline">
									{type}
								</span>
							))}
						</div>
					)}
				</ContentBox>
				<ContentBox>
					<Instructions instructions={recipe.analyzedInstructions} />
				</ContentBox>
			</div>
		</section>
	);
}
