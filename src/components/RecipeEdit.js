import React, { useContext } from "react";
import { RecipeContext } from "./App";
import {
  RecipeEditContainer_t1,
  RecipeEditContainer_t2,
} from "./RecipeEditContainer2";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";

export default function RecipeEdit({ closeEditorHandler, recipe }) {
  const { name, cooktime, servings, ingredients, instructions } = recipe;
  const { updateRecipeHandler } = useContext(RecipeContext);

  function updateAgent(changes) {
    updateRecipeHandler(recipe.id, { ...recipe, ...changes });
  }

  function ingredientUpdate(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    updateAgent({ ingredients: newIngredients });
  }

  function instructionUpdateHandler(index, instruction) {
    const newInstructions = [...recipe.instructions];
    newInstructions[index] = instruction;
    updateAgent({ instructions: newInstructions });
  }

  return (
    <div className="editor">
      <div className="close-btn-container">
        <button className="btn btn-light close" onClick={closeEditorHandler}>
          &times;
        </button>
      </div>
      <div className="card main-editor">
        <div className="card-header ">
          <h3 className="card-title">Edit Recipe</h3>
        </div>
        <div className="card-body">
          <section className="input-container">
            <label className="recipe-edit-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              // defaultValue={name}
              value={name}
              onChange={(e) => updateAgent({ name: e.target.value })}
            />
          </section>
          <section className="input-container">
            <label className="recipe-edit-label" htmlFor="cooktime">
              Cook Time
            </label>
            <input
              type="text"
              id="cooktime"
              name="cooktime"
              value={cooktime}
              onChange={(e) => updateAgent({ cooktime: e.target.value })}
            />
          </section>
          <section className="input-container">
            <label className="recipe-edit-label" htmlFor="servings">
              Servings
            </label>
            <input
              type="text"
              id="servings"
              name="servings"
              value={servings}
              onChange={(e) =>
                updateAgent({ servings: parseInt(e.target.value) || 0 })
              }
            />
          </section>
        </div>
        <br />
        <RecipeEditContainer_t2
          title={`Ingredients`}
          buttonTitle={`Add Ingredient`}
          label1={`Name`}
          label2={`Quantity`}
          ingredients={ingredients}
          ingredientUpdate={ingredientUpdate}
        />
        <br />
        <RecipeEditContainer_t1
          title={`Instructions`}
          buttonTitle={`Add Step`}
          label={`Steps`}
          instructions={instructions}
          instructionUpdateHandler={instructionUpdateHandler}
        />
        {/* <button className="save btn">Save</button> */}
      </div>

      {/* 
      //used lots of sections and divs 
      <div className="input-container">
        <section className="input-section">
          <div className="label">
            <label htmlFor="name">Name</label>
          </div>
          <div className="input">
            <input type="text" id="name" name="name" className="input-field" />
          </div>
        </section>
        <section className="input-section">
          <div className="label">
            <label htmlFor="cooktime">Cook Time</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="cooktime"
              name="cooktime"
              className="input-field"
            />
          </div>
        </section>
        <section className="input-section">
          <div className="label">
            <label htmlFor="servings">Servings</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="servings"
              name="servings"
              className="input-field"
            />
          </div>
        </section>
      </div> */}

      {/* 
      //MUI
      
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="input"
          variant="outlined"
          label="Name"
          id="name"
        />
        <TextField
          className="input"
          variant="outlined"
          label="Cook Time"
          id="cooktime"
        />
        <TextField
          className="input"
          variant="outlined"
          label="Servings"
          id="servings"
        />
      </Box> */}
    </div>
  );
}
