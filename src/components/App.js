import React from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import Header from "./Header";

function App() {
  return (
    <>
      {/* <Header /> */}
      <RecipeList recipies={sampleRecipies} />
    </>
  );
}

/**
 * Data
 */
const sampleRecipies = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
