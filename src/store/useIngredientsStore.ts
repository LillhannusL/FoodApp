import { create } from 'zustand';

interface IngredientsState {
	ingredients: string[];
	setStoreIngredients: (allIngredients: string[]) => void;
	clearStoreIngredients: () => void;
}

export const useIngredientsStore = create<IngredientsState>((set) => ({
	ingredients: [],
	setStoreIngredients: (allIngredients) =>
		set({
			ingredients: allIngredients,
		}),
	clearStoreIngredients: () => set({ ingredients: [] }),
}));
