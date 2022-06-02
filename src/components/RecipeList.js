import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const { recipies } = props;
  return (
    <div className="recipe-container">
      {recipies.map((recipe) => (
        <div key={recipe.id}>
          <Recipe {...recipe} />
        </div>
      ))}
      <div className="add-recipe-container">
        <button className="btn btn-primary">Add Recipe</button>
      </div>
    </div>
  );
}
