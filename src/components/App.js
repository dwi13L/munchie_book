import React from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";

function App() {
  return (
    <>
      <RecipeList recipies={sampleRecipies} />
      <button>Add Recipe</button>
    </>
  );
}

const sampleRecipies = [
  {
    id: 1,
    name: `Plain chicken`,
    servings: 3,
    cooktime: `1.40`,
    instructions: [`step 1`, `step 2`, `step 3`],
    ingredients: [
      {
        name: `ingredient 1`,
        quantity: `this much quantity`,
      },
      {
        name: `ingredient 2`,
        quantity: `this much quantity`,
      },
    ],
  },
  {
    id: 2,
    name: `Green salad`,
    servings: 4,
    cooktime: `20`,
    instructions: [`step 1`, `step 2`, `step 3`, `step 4`],
    ingredients: [
      {
        name: `ingredient 1`,
        quantity: `this much quantity`,
      },
      {
        name: `ingredient 2`,
        quantity: `this much quantity`,
      },
    ],
  },
];
export default App;
