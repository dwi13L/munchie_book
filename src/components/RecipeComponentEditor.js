import { RecipeEditorContext } from "./RecipeEditor";
import React, { useContext } from "react";

function IngredientEditor(props) {
  const { ingredient, index } = props;
  const { ingredientUpdateHandler, deleteIngredientHandler } =
    useContext(RecipeEditorContext);
  /**  Sample data
       {
         id: `xyz`,
          name: `Wheat`,
          quantity: `1 pound`,
        },
   */

  function updateAgent(changes) {
    ingredientUpdateHandler(index, { ...ingredient, ...changes });
  }

  return (
    <div key={index} className="recipe-ingredient-edit_1">
      <input
        type="text"
        value={ingredient.name}
        onChange={(e) => updateAgent({ name: e.target.value })}
      />
      <input
        type="text"
        value={ingredient.quantity}
        onChange={(e) => updateAgent({ quantity: e.target.value })}
      />
      <button
        className="btn btn-sm"
        onClick={() => deleteIngredientHandler(index)}
      >
        &times;
      </button>
    </div>
  );
}

function InstructionEditor(props) {
  const { instruction, index } = props;
  /** Sample data
    
      instructions: [
        `Make dough`,
        `Make base with dough`,
        `Add chopped veggies`,
        `Bake and serve hot`,
      ],
   */
  const { instructionUpdateHandler, deleteInstructionHandler } =
    useContext(RecipeEditorContext);

  return (
    <>
      <div key={index} className="recipe-ingredient-edit_2">
        <input
          type="text"
          value={instruction}
          onChange={(e) => instructionUpdateHandler(index, e.target.value)}
        />
        <button
          className="btn btn-sm"
          onClick={() => deleteInstructionHandler(index)}
        >
          &times;
        </button>
      </div>
    </>
  );
}

export { InstructionEditor, IngredientEditor };
