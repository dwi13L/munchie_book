import React from "react";
import {
  RecipeEditContainer_t1,
  RecipeEditContainer_t2,
} from "./RecipeEditContainer2";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";

export default function RecipeEdit() {
  return (
    <div className="editor">
      <div className="close-btn-container">
        <button className="btn btn-light close">&times;</button>
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
            <input type="text" id="name" name="name" />
          </section>
          <section className="input-container">
            <label className="recipe-edit-label" htmlFor="cooktime">
              Cook Time
            </label>
            <input type="text" id="cooktime" name="cooktime" />
          </section>
          <section className="input-container">
            <label className="recipe-edit-label" htmlFor="servings">
              Servings
            </label>
            <input type="text" id="servings" name="servings" />
          </section>
        </div>
        <br />
        <RecipeEditContainer_t2
          title={`Ingredients`}
          buttonTitle={`Add Ingredient`}
          label1={`Name`}
          label2={`Quantity`}
        />
        <br />
        <RecipeEditContainer_t1
          title={`Instructions`}
          buttonTitle={`Add Step`}
          label={`Steps`}
        />
        <button className="save btn">Save</button>
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
