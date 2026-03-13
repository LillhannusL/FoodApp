export interface Ingredient {
	id: number;
	original: string; // Ex: "2 cups of flour"
	name: string;
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
