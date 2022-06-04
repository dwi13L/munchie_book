import React, { useContext } from "react";
import { RecipeCrudContext } from "./App";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const { recipies } = props;
  const { addRecipeHandler } = useContext(RecipeCrudContext);
  return (
    <div className="recipe-container">
      {recipies.map((recipe) => (
        <div key={recipe.id}>
          <Recipe {...recipe} />
        </div>
      ))}
      <div className="add-recipe-container">
        <button className="btn btn-primary" onClick={addRecipeHandler}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
