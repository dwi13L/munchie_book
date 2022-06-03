import React from "react";

function RecipeIngredientEdit_t2() {
  return (
    <>
      <div className="recipe-ingredient-edit_1">
        <input type="text" />
        <input type="text" />
        <button className="btn">&times;</button>
      </div>
    </>
  );
}

function RecipeIngredientEdit_t1() {
  return (
    <>
      <div className="recipe-ingredient-edit_2">
        <input type="text" />
        <button className="btn">&times;</button>
      </div>
    </>
  );
}

export { RecipeIngredientEdit_t1, RecipeIngredientEdit_t2 };
