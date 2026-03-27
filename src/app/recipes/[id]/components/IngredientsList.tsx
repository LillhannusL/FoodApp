interface Ingredient {
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

interface IngredientsListProps {
  ingredients: Ingredient[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  const getIngredientColor = (aisle: string) => {
    const lower = aisle?.toLowerCase() || "";
    if (
      lower.includes("spices & seasonings") ||
      lower.includes("oil, vinegar, salad dressing") ||
      lower.includes("condiments, grilling supplies")
    ) {
      return "bg-darkGreen-gradient";
    } else if (
      lower.includes("pasta & rice") ||
      lower.includes("cereal") ||
      lower.includes("grain/nuts") ||
      lower.includes("gluten free") ||
      lower.includes("dried nuts")
    ) {
      return "bg-yellow-gradient";
    } else if (
      lower.includes("baking") ||
      lower.includes("nut butters,jams, and honey") ||
      lower.includes("sweet snacks") ||
      lower.includes("tea and coffee")
    ) {
      return "bg-pink-gradient";
    } else if (
      lower.includes("milk, eggs, other dairy") ||
      lower.includes("cheese") ||
      lower.includes("produce") ||
      lower.includes(" refrigerated")
    ) {
      return "bg-green-gradient";
    } else if (
      lower.includes("meat") ||
      lower.includes("seafood") ||
      lower.includes("frozen")
    ) {
      return "bg-lightBlue-gradient";
    } else if (
      lower.includes("canned and jarred") ||
      lower.includes("savory snacks") ||
      lower.includes("health foods") ||
      lower.includes("ethnic foods")
    ) {
      return "bg-blue-gradient";
    } else if (lower.includes("bakery/bread") || lower.includes("bread")) {
      return "bg-orange-gradient";
    } else {
      return "bg-red-gradient";
    }
  };

  return (
    <div className="space-y-6 text-light-primary/90">
      <div>
        <h2 className="text-3xl font-bold sm:text-center sm:p-4">
          Ingredients
        </h2>
        <ul className="sm:flex sm:flex-col sm:items-center w-full">
          {ingredients.map((ingredient: Ingredient) => {
            const bgColor = getIngredientColor(ingredient.aisle);

            return (
              <li
                key={ingredient.id}
                className={`flex w-full justify-between p-4 rounded-xl my-4 shadow-md/20 ${bgColor} sm:max-w-2xl sm:p-6 sm:gap-4 `}
              >
                <span className="capitalize text-lg">{ingredient.name}</span>
                <span>
                  {Math.round(ingredient.measures.metric.amount)}{" "}
                  {ingredient.measures.metric.unitShort}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
