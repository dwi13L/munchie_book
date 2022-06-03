import React, { useDeferredValue, useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import Header from "./Header";
import { v4 as uuid } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext(undefined);
const RECIPIES = `COOKWITHREACT_RECIPIES`;

function App() {
  const [recipies, setRecipies] = useState(() => {
    const data = localStorage.getItem(RECIPIES);
    return data == null ? [] : JSON.parse(data);
  });

  const handlers = { addRecipeHandler, deleteRecipeHandler };

  useEffect(() => {
    localStorage.setItem(RECIPIES, JSON.stringify(recipies));
  }, [recipies]);

  function addRecipeHandler() {
    const newRecipe = {
      id: uuid(),
      name: `Another recipe`,
      servings: 4,
      cooktime: `50`,
      instructions: [`Step 1`, `Step 2`, `Step 3`],
      ingredients: [
        {
          name: `Item 1`,
          quantity: `1 kg`,
        },
        {
          name: `Item 2`,
          quantity: `250 grams`,
        },
      ],
    };

    setRecipies([...recipies, newRecipe]);
  }

  function deleteRecipeHandler(id) {
    setRecipies(recipies.filter((recipe) => recipe.id !== id));
  }

  return (
    <>
      {/* <Header /> */}
      <RecipeContext.Provider value={handlers}>
        <RecipeList recipies={recipies} />
        <RecipeEdit />
      </RecipeContext.Provider>
    </>
  );
}

/**
 * Data
 */
const sampleRecipies = [
  {
    id: uuid(),
    name: `Pizza`,
    servings: 2,
    cooktime: `60`,
    instructions: [
      `Make dough`,
      `Make base with dough`,
      `Add chopped veggies`,
      `Bake and serve hot`,
    ],
    ingredients: [
      {
        name: `Wheat`,
        quantity: `1 pound`,
      },
      {
        name: `Veggies`,
        quantity: `As per requirement`,
      },
    ],
  },
  {
    id: uuid(),
    name: `Fruit salad`,
    servings: 4,
    cooktime: `10`,
    instructions: [
      `peal/chop/dice fruits of liking`,
      `Mix in a bowl`,
      `Serve fresh`,
    ],
    ingredients: [
      {
        name: `Assorted fruits`,
        quantity: `As per requirement`,
      },
    ],
  },
  {
    id: uuid(),
    name: `Coffee`,
    servings: 1,
    cooktime: `3`,
    instructions: [
      `Add ground coffee powder to mug`,
      `Add 5 to 10 ml of water`,
      `Stir well`,
      `Add milk and sugar as per requirement`,
      `Drink coffee`,
    ],
    ingredients: [
      {
        name: `Coffee powder`,
        quantity: `10g`,
      },
    ],
  },
];
export default App;
