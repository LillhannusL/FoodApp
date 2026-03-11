export interface Ingredient {
  id: number;
  original: string; // Ex: "2 cups of flour"
  name: string;
}

export interface Recipe {
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
}