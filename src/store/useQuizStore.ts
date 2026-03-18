import { create } from 'zustand';

interface QuizState {
	result: {};
	setResult: (answers: {}) => void;
	clearResult: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
	result: [],
	setResult: (answers) =>
		set({
			result: answers,
		}),
	clearResult: () => set({ result: [] }),
}));
