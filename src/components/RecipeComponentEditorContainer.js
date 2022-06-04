import React from "react";
import { InstructionEditor, IngredientEditor } from "./RecipeComponentEditor";

function IngredientEditorContainer(props) {
  const {
    title,
    buttonTitle,
    label1,
    label2,
    ingredients,
    addIngredientHandler,
  } = props;

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
            <IngredientEditor
              ingredient={ingredient}
              index={index}
              key={index}
            />
          ))}
        </div>
        <button className="btn btn-primary add" onClick={addIngredientHandler}>
          {buttonTitle}
        </button>
      </div>
    </>
  );
}

function InstructionEditorContainer(props) {
  const { title, buttonTitle, label, instructions, addInstructionHandler } =
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
            <InstructionEditor
              instruction={instruction}
              index={index}
              key={index}
            />
          ))}
        </div>
        <button
          className="btn btn-primary add"
          onClickCapture={addInstructionHandler}
        >
          {buttonTitle}
        </button>
      </div>
    </>
  );
}

export { InstructionEditorContainer, IngredientEditorContainer };
