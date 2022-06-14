import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import Header from "./Header";
import { v4 as uuid } from "uuid";
import RecipeEditor from "./RecipeEditor";
import EditorSegmentMessage from "./EditorSegmentMessage";
import GithubLink from "./githubLink/GithubLink.js";

export const RecipeCrudContext = React.createContext(undefined);
const RECIPIES = `COOKWITHREACT_RECIPIES`;

function App() {
  /**
   * Hooks
   */
  const [recipies, setRecipies] = useState(() => {
    const data = localStorage.getItem(RECIPIES);
    return data == null || JSON.parse(data).length === 0
      ? sampleRecipies //[]
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
   * Helper variables
   */
  const recipeListEmpty = recipies.length === 0 ? true : false;
  const editorOpen = selectedItemId != null ? true : false;

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
      name: ``,
      servings: 0,
      cooktime: ``,
      instructions: [``],
      ingredients: [
        {
          name: ``,
          quantity: ``,
        },
      ],
    };

    setSelectedItemId(newRecipe.id);
    setRecipies([...recipies, newRecipe]);
  }

  function deleteRecipeHandler(id) {
    if (selectedItemId === id) {
      closeEditorHandler();
    }
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
      <RecipeCrudContext.Provider value={handlers}>
        {/* Left Side */}
        {!recipeListEmpty && <RecipeList recipies={recipies} />}
        {recipeListEmpty && (
          <div className="empty-recipe-list">
            <button className="btn btn-primary" onClick={addRecipeHandler}>
              Add Recipe
            </button>
          </div>
        )}

        {/* Right Side */}

        {editorOpen && (
          <RecipeEditor
            recipe={selectedRecipe}
            closeEditorHandler={closeEditorHandler}
          />
        )}

        {!editorOpen && (
          <EditorSegmentMessage recipeListEmpty={recipeListEmpty} />
        )}
      </RecipeCrudContext.Provider>
      <GithubLink source="https://github.com/dwi13L/munchie_book" />
    </>
  );
}

/**
 * Data
 */
const sampleRecipies = [
  {
    id: "1",
    name: `Coffee - (SAMPLE RECIPE )`,
    servings: 1,
    cooktime: `10`,
    instructions: [
      `Add 5 ml of water to coffee powder in a mug and stir well`,
      `Add milk`,
      `Add sugar if needed`,
      `Leave mug in oven for 2 minutes under medium heat`,
      `Take out and sip your hot yum coffee!`,
    ],
    ingredients: [
      {
        name: `Coffee powder`,
        quantity: `5 grams`,
      },
      {
        name: `Milk`,
        quantity: `250 ml`,
      },
    ],
  },
];
/*
  {
    id: "2",
    name: `Fruit salad (SAMPLE RECIPE)`,
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
    id: "3",
    name: `Coffee (SAMPLE RECIPE)`,
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
*/
export default App;
