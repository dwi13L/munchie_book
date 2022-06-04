import React from "react";

export default function EditorSegmentMessage({ recipeListEmpty }) {
  return (
    <div className="editor-closed">
      {recipeListEmpty ? (
        <h1 id="message">Add a recipe</h1>
      ) : (
        <h1 id="message">Open a recipe to edit</h1>
      )}
    </div>
  );
}
