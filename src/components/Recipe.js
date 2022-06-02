import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import Ingredient from "./Ingredient";

export default function Recipe(props) {
  const { name, cooktime, servings, instructions, ingredients } = props;
  return (
    <>
      <h3>{name}</h3>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <article className="content">
        <section>
          <span>Cooktime:</span>
          <span>{cooktime}</span>
        </section>
        <section>
          <span>Servings:</span>
          <span>{servings}</span>
        </section>
        <section>
          <span>Instructions:</span>
          <ol>
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
        <section>
          <span>Ingredients:</span>
          <div className="ingredients-container">
            {ingredients.map((ingredient, index) => (
              <Ingredient key={index} {...ingredient} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
