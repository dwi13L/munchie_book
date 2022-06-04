import { RecipeEditor } from "./RecipeEdit";
import React, { useContext } from "react";

function RecipeIngredientEdit_t2(props) {
  const { ingredient, index } = props;
  const { ingredientUpdateHandler, deleteIngredientHandler } =
    useContext(RecipeEditor);
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
      <button className="btn" onClick={() => deleteIngredientHandler(index)}>
        &times;
      </button>
    </div>
  );
}

function RecipeIngredientEdit_t1(props) {
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
    useContext(RecipeEditor);

  return (
    <>
      <div key={index} className="recipe-ingredient-edit_2">
        <input
          type="text"
          value={instruction}
          onChange={(e) => instructionUpdateHandler(index, e.target.value)}
        />
        <button className="btn" onClick={() => deleteInstructionHandler(index)}>
          &times;
        </button>
      </div>
    </>
  );
}

export { RecipeIngredientEdit_t1, RecipeIngredientEdit_t2 };
