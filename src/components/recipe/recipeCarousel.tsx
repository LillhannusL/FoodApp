'use client';

import { useState, useEffect } from 'react';
import type { RecipeData } from '@/types/index';
import Image from 'next/image';

interface Props {
	recipes: RecipeData[];
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
}

function SafeImage({ src, alt, width, height, className }: any) {
	const [imgSrc, setImgSrc] = useState(src || '/images/fallback-image.png');

	useEffect(() => {
		setImgSrc(src || '/images/fallback-image.png');
	}, [src]);

	return (
		<Image
			src={imgSrc}
			alt={alt}
			width={width}
			height={height}
			className={className}
			onError={() => setImgSrc('/images/fallback-image.png')}
		/>
	);
}

export default function RecipeCarousel({
	recipes,
	currentIndex,
	setCurrentIndex,
}: Props) {
	if (!recipes || recipes.length === 0) return null;

	const goToNext = () => {
		//next is = if currentIndex = lenght of recipes -1(last) put to 0 else currentIndex +1
		const next = currentIndex === recipes.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(next);
		document.getElementById(`slide${next}`)?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	const gotToPrev = () => {
		//prev is = if currentIndex = 0 put recipes.lenght -1 (last) else currentIndex -1
		const prev = currentIndex === 0 ? recipes.length - 1 : currentIndex - 1;
		setCurrentIndex(prev);
		document.getElementById(`slide${prev}`)?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	return (
		<div className="carousel w-full overflow-hidden">
			{recipes.map((recipe, index) => {
				return (
					<div
						key={recipe.id}
						id={`slide${index}`}
						className="carousel-item relative w-full flex flex-col "
					>
						<div className="h-90">
							<SafeImage
								src={recipe.image}
								alt={recipe.title}
								width={600}
								height={600}
								className="w-full h-full object-cover rounded-xl sm:object-contain"
							/>

							{recipes.length > 1 && (
								<div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between z-10 sm:left-52 sm:right-52">
									<button
										onClick={gotToPrev}
										className="btn btn-circle btn-sm bg-black/20 border-none text-white backdrop-blur-md hover:bg-black/40 shadow-lg/30"
									>
										❮
									</button>
									<button
										onClick={goToNext}
										className="btn btn-circle btn-sm bg-black/20 border-none text-white backdrop-blur-md hover:bg-black/40 shadow-lg/30"
									>
										❯
									</button>
								</div>
							)}
						</div>

						{/* Text-sektion under bilden */}
						<div className="">
							<h4 className="text-center py-4 text-lg font-semibold tracking-wide sm:text-3xl">
								{recipe.title}
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
}
