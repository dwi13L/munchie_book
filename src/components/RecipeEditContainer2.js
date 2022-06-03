import React from "react";
import {
  RecipeIngredientEdit_t1,
  RecipeIngredientEdit_t2,
} from "RecipeIngredientEdit";

function RecipeEditContainer_t2({ title, buttonTitle, label1, label2 }) {
  return (
    <>
      <div className="card-body">
        <label className="card-subtitle mb-2 text-muted">{title}</label>
        <div className="">
          <div className="labels">
            <span className="card-text">{label1}</span>
            <span className="card-text">{label2}</span>
          </div>
          <RecipeIngredientEdit_t2 />
          <RecipeIngredientEdit_t2 />
        </div>
        <button className="btn btn-primary add">{buttonTitle}</button>
      </div>
    </>
  );
}

function RecipeEditContainer_t1({ title, buttonTitle, label }) {
  return (
    <>
      <div className="card-body">
        <label className="card-subtitle mb-2 text-muted">{title}</label>
        <div className="">
          <div className="labels">
            <span className="card-text">{label}</span>
          </div>
          <RecipeIngredientEdit_t1 />
        </div>
        <button className="btn btn-primary add">{buttonTitle}</button>
      </div>
    </>
  );
}

export { RecipeEditContainer_t1, RecipeEditContainer_t2 };
