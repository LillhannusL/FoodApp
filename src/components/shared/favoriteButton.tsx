'use client';

import { useUser } from './UserProvider';
import { createClient } from '@/lib/supabase/client';
import { useState, useEffect } from 'react';
import {
	addLike,
	removeLike,
	checkIsLiked,
} from '@/lib/utils/FavoritesFunctions';
import type { RecipeData } from '@/types';
import AuthModal from './AuthModal';

interface favoritesProps {
	recipe: RecipeData;
}

export default function FavoritesButton({ recipe }: favoritesProps) {
	const supabase = createClient();
	const { user, isLoading } = useUser();
	const [isLiked, setIsLiked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const checkStatus = async () => {
			if (!user?.id) {
				setIsLiked(false);
				return;
			}

			try {
				const liked = await checkIsLiked(supabase, recipe.id, user.id);
				setIsLiked(liked);
			} catch (error) {
				console.error('Error checking liked status:', error);
			}
		};

		checkStatus();
	}, [recipe.id, user?.id]);

	const toggleLike = async () => {
		console.log('clicked!');
		if (isLoading) return;

		if (!user) {
			setIsModalOpen(true);
			return;
		}
		const previousStatus = isLiked;
		setIsLiked(!previousStatus);

		try {
			if (previousStatus) {
				await removeLike(supabase, recipe.id, user.id);
			} else {
				await addLike(supabase, recipe.id, user.id, recipe.title, recipe.image);
			}
		} catch (error) {
			setIsLiked(previousStatus);
			console.error('Could not update favorites:', error);
		}
	};

	return (
		<div className={isLoading ? 'opacity-50 pointer-events-none' : ''}>
			<button
				onClick={toggleLike}
				type="button"
				className="cursor-pointer transition-transform"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`lucide lucide-star-icon lucide-star ${isLiked ? 'fill-light-primary stroke-none' : 'fill-none'}`}
				>
					<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
				</svg>
			</button>

			<AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</div>
	);
}
