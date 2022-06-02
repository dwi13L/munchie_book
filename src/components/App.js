import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import Header from "./Header";
import { v4 as uuid } from "uuid";

function App() {
  const [recipies, setRecipies] = useState(sampleRecipies);

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
