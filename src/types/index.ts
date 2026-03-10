export interface Recipe {
  id: number,
  title: string,
  image: string,
  readyInMinutes: number,
  servings: number,
  summary: string,
  instructions: string,
  extendedIngretients: {
    id: number,
    original: string}[]
}