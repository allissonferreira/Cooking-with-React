import React, { useContext } from "react";
import { RecipeContext } from "../App";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
      <div className="add-recipe-button-container">
        <button onClick={handleRecipeAdd}>Add Recipe</button>
      </div>
    </div>
  );
}
