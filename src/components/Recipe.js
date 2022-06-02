import React from "react";
import Ingredient from "./Ingredient";

export default function Recipe(props) {
  const { id, name, cooktime, servings, instructions, ingredients } = props;
  return (
    <div className="card main">
      <div className="card-header flex">
        <h3>{name}</h3>
        <div className="button-container">
          <button className="btn btn-primary ">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <article className="card-body">
        <section>
          <span className="card-subtitle mb-2 text-muted">Cooktime: </span>
          <span className="card-text">{cooktime} minutes</span>
        </section>
        <section>
          <span className="card-subtitle mb-2 text-muted">Servings: </span>
          <span className="card-text">{servings}</span>
        </section>
        <section className="card-body">
          <span className="card-subtitle mb-2 text-muted">Ingredients:</span>
          <ol className="card-text">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <Ingredient {...ingredient} />
              </li>
            ))}
          </ol>
        </section>
        <section className="card-body">
          <span className="card-subtitle mb-2 text-muted">Instructions:</span>
          <ol className="card-text">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </article>
    </div>
  );
}
