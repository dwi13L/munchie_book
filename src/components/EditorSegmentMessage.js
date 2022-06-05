import React from "react";

export default function EditorSegmentMessage({ recipeListEmpty }) {
  return (
    <div className="editor-closed">
      {recipeListEmpty ? (
        <>
          <p id="message">Add a recipe or refresh page for sample</p>
        </>
      ) : (
        <p id="message">Open a recipe to edit or add a new one</p>
      )}
    </div>
  );
}
