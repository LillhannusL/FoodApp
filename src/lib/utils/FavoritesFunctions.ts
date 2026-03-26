import { SupabaseClient } from '@supabase/supabase-js';

export const addLike = async (
	supabase: SupabaseClient,
	recipeId: number,
	userId: string,
	recipeTitle: string,
	recipeImg: string,
) => {
	const { error } = await supabase.from('favorites').insert([
		{
			user_id: userId,
			recipe_id: recipeId,
			recipe_title: recipeTitle,
			recipe_image: recipeImg,
		},
	]);

	if (error) throw error;
	return true;
};

export const removeLike = async (
	supabase: SupabaseClient,
	recipeId: number,
	userId: string,
) => {
	const { error } = await supabase
		.from('favorites')
		.delete()
		.eq('recipe_id', recipeId)
		.eq('user_id', userId);

	if (error) throw error;
	return true;
};

export const checkIsLiked = async (
	supabase: SupabaseClient,
	recipeId: number,
	userId: string,
) => {
	const { data, error } = await supabase
		.from('favorites')
		.select('recipe_id')
		.eq('recipe_id', recipeId)
		.eq('user_id', userId)
		.maybeSingle();

	if (error) throw error;
	return !!data;
};

export const getFavorites = async (
	supabase: SupabaseClient,
	userId: string,
) => {
	const { data, error } = await supabase
		.from('favorites')
		.select('*')
		.eq('user_id', userId);

	if (error) throw error;

	return data || [];
};
