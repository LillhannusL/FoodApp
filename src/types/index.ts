import { StaticImageData } from 'next/image';

export interface Ingredient {
	id: number;
	name: string;
	aisle: string;
	measures: {
		metric: {
			amount: number;
			unitShort: string;
		};
	};
}

interface InstructionStep {
	number: number;
	step: string;
	ingredients?: { name: string }[];
	equipment?: { name: string }[];
}

interface AnalyzedInstructions {
	name: string;
	steps: InstructionStep[];
}

export interface RecipeData {
	id: number;
	title: string;
	image: string;
	summary: string;
	instructions: string;
	readyInMinutes: number;
	servings: number;
	extendedIngredients: Ingredient[];
	vegetarian?: boolean;
	vegan?: boolean;
	glutenFree?: boolean;
	dishTypes?: string[];
	analyzedInstructions?: AnalyzedInstructions[];
}

export interface QuestionType {
	id: number;
	question: string;
	buttonStyle: string;
	answers: answerType[];
}

export interface answerType {
	text: string;
	image?: string;
	symbol?: any;
}
