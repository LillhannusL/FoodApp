"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { fetchRecipeByID } from "@/services/recipeApi";
import ContentBox from "@/components/shared/ContentBox";
import type { RecipeData } from "@/types/index";
import Instructions from "@/app/recipes/[id]/components/Instructions";
import IngredientsList from "@/app/recipes/[id]/components/IngredientsList";
import Image from "next/image";
import FavoritesButton from "@/components/shared/favoriteButton";
import BackBtn from "@/components/shared/backButton";

type PageParams = Promise<{ id: string }>;

export default function Recipe({ params }: { params: PageParams }) {
  const { id } = React.use(params);
  const [recipe, setRecipe] = useState<RecipeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState<string>("");

  //Fetch recipe from id
  useEffect(() => {
    if (!id) return;
    let isIgnore = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipeByID(id);
        if (!isIgnore) {
          setRecipe(data);
          setImgSrc(data.image);
          setLoading(false);
        }
      } catch (error) {
        if (!isIgnore) {
          console.error("Fel vid hämtning:", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      isIgnore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center flex-col gap-4">
        <div className="skeleton h-96 w-full"></div>
      </div>
    );
  }

  if (!recipe) {
    return <p>Recipe not found...</p>;
  }

  const ingredientCount = recipe.extendedIngredients.length;

  return (
    <section className=" sm:flex sm:flex-col sm:items-center text-light-primary">
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={imgSrc}
          alt={recipe.title || "Recipe Image"}
          width={500}
          height={500}
          className="sm:pt-32 rounded-b-xl object-cover w-full h-auto aspect-square"
          onError={() => setImgSrc("/images/fallback-image.png")}
        />
        <div className="absolute z-10 top-0 left-0 w-full flex items-center justify-between p-4 sm:pt-12 sm:hidden">
          <BackBtn route="/results?type=random" />
          <FavoritesButton recipe={recipe} />
        </div>
        <div className="z-2 absolute bottom-0 left-0 w-full p-4 font-bold text-2xl space-y-2 ">
          <div className="flex gap-4 ">
            <span className="badge bg-green-gradient border-none p-4 rounded-full shadow-md text-light-primary">
              {recipe.readyInMinutes} min
            </span>
            <span className="badge bg-green-gradient border-none p-4 rounded-full shadow-md text-light-primary">
              {recipe.servings} port
            </span>
            <span className="badge bg-green-gradient border-none p-4 rounded-full shadow-md text-light-primary">
              {ingredientCount} Ingr
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <h1 className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-2 m-2 shadow-lg text-3xl sm:max-w-4xl">
          {recipe.title}
        </h1>
        <FavoritesButton className="hidden sm:block" recipe={recipe} />
      </div>

      <div className="flex flex-col gap-4 px-4 pt-4 pb-24">
        <ContentBox>
          <IngredientsList ingredients={recipe.extendedIngredients} />

          {/* {recipe.dishTypes && (
            <div className="flex flex-wrap gap-2">
              {recipe.dishTypes.map((type: string) => (
                <span key={type} className="badge badge-outline">
                  {type}
                </span>
              ))}
            </div>
          )} */}
        </ContentBox>
        <ContentBox>
          <Instructions instructions={recipe.analyzedInstructions} />
        </ContentBox>
      </div>
    </section>
  );
}
