import React, { useDeferredValue, useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import Header from "./Header";
import { v4 as uuid } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext(undefined);
const RECIPIES = `COOKWITHREACT_RECIPIES`;

function App() {
  /**
   * Hooks
   */
  const [recipies, setRecipies] = useState(() => {
    const data = localStorage.getItem(RECIPIES);
    return data == null || JSON.parse(data).length == 0
      ? sampleRecipies
      : JSON.parse(data);
  });

  const [selectedItemId, setSelectedItemId] = useState(null);

  const selectedRecipe = recipies.find(
    (recipe) => recipe.id === selectedItemId
  );

  //Persist changes
  useEffect(() => {
    localStorage.setItem(RECIPIES, JSON.stringify(recipies));
  }, [recipies]);

  /**
   * Handlers
   */
  const handlers = {
    addRecipeHandler,
    deleteRecipeHandler,
    editRecipeHandler,
    updateRecipeHandler,
  };

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

    setSelectedItemId(newRecipe.id);
    setRecipies([...recipies, newRecipe]);
  }

  function deleteRecipeHandler(id) {
    setRecipies(recipies.filter((recipe) => recipe.id !== id));
  }

  function closeEditorHandler() {
    setSelectedItemId(null);
  }

  function editRecipeHandler(id) {
    setSelectedItemId(id);
  }

  function updateRecipeHandler(id, newRecipe) {
    const updatedRecipeList = [...recipies];
    const index = updatedRecipeList.findIndex((r) => r.id === id);
    updatedRecipeList[index] = newRecipe;
    setRecipies(updatedRecipeList);
  }
  /**
   * JSX
   */
  return (
    <>
      <Header />
      <RecipeContext.Provider value={handlers}>
        <RecipeList recipies={recipies} />
        {selectedItemId != null && (
          /*selectedRecipe != undefined &&*/
          <RecipeEdit
            recipe={selectedRecipe}
            closeEditorHandler={closeEditorHandler}
          />
        )}
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
        id: uuid(),
        name: `Wheat`,
        quantity: `1 pound`,
      },
      {
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
        name: `Coffee powder`,
        quantity: `10g`,
      },
    ],
  },
];
export default App;
