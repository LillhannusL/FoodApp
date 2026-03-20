"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ContentBox from "@/components/shared/ContentBox";
import {
  fetchRandomRecipes,
  fetchRecipeByIngredient,
  fetchRecipefromQuiz,
} from "@/services/recipeApi";
import RecipeCarousel from "@/components/recipe/recipeCarousel";
import { useIngredientsStore } from "@/store/useIngredientsStore";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/useQuizStore";
import type { RecipeData } from "@/types";

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<RecipeData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const currentRecipe = recipes[currentIndex];

  const type = searchParams.get("type");
  const { ingredients } = useIngredientsStore();
  const { result } = useQuizStore();
  console.log("QUIZ RESULT:", result);
  if (!type) {
    return null;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!type) {
        setIsLoading(false);
        return;
      }

      if (type === "search" && (!ingredients || ingredients.length === 0)) {
        setIsLoading(false);
        return;
      }

      if (type === "quiz" && !result) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        let data;

        if (type === "random") {
          data = await fetchRandomRecipes();
        } else if (type === "search") {
          data = await fetchRecipeByIngredient(ingredients);
        } else {
          data = await fetchRecipefromQuiz(result);
        }

        setRecipes(data);
      } catch (error) {
        console.error("Fetching error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [type, ingredients, result]);

  const handleClick = () => {
    if (!recipes[currentIndex]) return;
    router.push(`/recipes/${recipes[currentIndex].id}`);
  };

  if (!isLoading && recipes.length === 0) {
    return (
      <ContentBox>
        <section className="text-center pt-28 px-4">
          <h1 className="text-3xl font-bold">Oops! No recipes found.</h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Your combination was a bit too unique for our chef today. Try
            changing your time limit or cravings!
          </p>
        </section>
      </ContentBox>
    );
  }

  return (
    <section className="px-4">
      <h1 className="text-4xl font-bold pt-16 pb-8 text-center md:pt-28">
        We found these:
      </h1>

      <ContentBox>
        {isLoading && (
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <div className="skeleton h-96 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        )}
        <div>
          <RecipeCarousel
            recipes={recipes}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <button className="btn" onClick={handleClick}>
          Se hela receptet!
        </button>
      </ContentBox>
    </section>
  );
}
