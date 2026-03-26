import { create } from 'zustand';
import type { RecipeData } from '@/types';

interface ResultState {
	storedResult: RecipeData[];
	setStoredResult: (result: RecipeData[]) => void;
	clearStoredResult: () => void;
}

export const useResultStore = create<ResultState>((set) => ({
	storedResult: [],
	setStoredResult: (result) =>
		set({
			storedResult: result,
		}),
	clearStoredResult: () => set({ storedResult: [] }),
}));
