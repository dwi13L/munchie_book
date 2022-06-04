import React from "react";
import {
  RecipeIngredientEdit_t1,
  RecipeIngredientEdit_t2,
} from "RecipeIngredientEdit";

function RecipeEditContainer_t2(props) {
  const { title, buttonTitle, label1, label2, ingredients, ingredientUpdate } =
    props;
  return (
    <>
      <div className="card-body">
        <label className="card-subtitle mb-2 text-muted">{title}</label>
        <div className="">
          <div className="labels">
            <span className="card-text">{label1}</span>
            <span className="card-text">{label2}</span>
          </div>
          {ingredients.map((ingredient, index) => (
            <RecipeIngredientEdit_t2
              ingredient={ingredient}
              index={index}
              ingredientUpdate={ingredientUpdate}
            />
          ))}
        </div>
        <button className="btn btn-primary add">{buttonTitle}</button>
      </div>
    </>
  );
}

function RecipeEditContainer_t1(props) {
  const { title, buttonTitle, label, instructions, instructionUpdateHandler } =
    props;
  return (
    <>
      <div className="card-body">
        <label className="card-subtitle mb-2 text-muted">{title}</label>
        <div className="">
          <div className="labels">
            <span className="card-text">{label}</span>
          </div>
          {instructions.map((instruction, index) => (
            <RecipeIngredientEdit_t1
              instruction={instruction}
              index={index}
              instructionUpdateHandler={instructionUpdateHandler}
            />
          ))}
        </div>
        <button className="btn btn-primary add">{buttonTitle}</button>
      </div>
    </>
  );
}

export { RecipeEditContainer_t1, RecipeEditContainer_t2 };
