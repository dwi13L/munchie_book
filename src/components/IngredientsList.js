import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ ingredients }) {
  const elements = ingredients.map((ingredient, index) => (
    <Ingredient key={index} {...ingredient} />
  ));

  return elements;
}
