import React from "react";

export default function Ingredient({ name, quantity }) {
  return (
    <div className="ingredient">
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
}
