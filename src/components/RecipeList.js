import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipies }) {
  return (
    <div className="recipe-container">
      {recipies.map((recipe) => (
        <div className="recipe" key={recipe.id}>
          <Recipe {...recipe} />
        </div>
      ))}
    </div>
  );
}
