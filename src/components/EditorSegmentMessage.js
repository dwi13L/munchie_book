import React from "react";

export default function EditorSegmentMessage({ recipeListEmpty }) {
  return (
    <div className="editor-closed">
      {recipeListEmpty ? (
        <>
          <p id="message">{`Add a recipe | Refresh for Samples`}</p>
        </>
      ) : (
        <h1 id="message">Open a recipe to edit</h1>
      )}
    </div>
  );
}
