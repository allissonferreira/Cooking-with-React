import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "../App";
import uuidv4 from "uuid/dist/v4";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  const handleChange = (changes) => {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  };

  const handleIngredientChange = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );

    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  };

  const handleIngredientAdd = () => {
    const ingredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };

    handleChange({ ingredients: [...recipe.ingredients, ingredient] });
  };

  const handleIngredientDelete = (id) => {
    handleChange({
      ingredients: recipe.ingredients.filter(
        (ingredient) => ingredient.id !== id
      ),
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => handleRecipeSelect(undefined)}>&times;</button>
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleChange({ title: e.target.value })}
          value={recipe.title}
        />
      </div>
      <div>
        <label htmlFor="cook_time">Cook Time</label>
        <input
          type="text"
          name="cook_time"
          id="cook_time"
          onChange={(e) => handleChange({ cook_time: e.target.value })}
          value={recipe.cook_time}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          onChange={(e) => handleChange({ servings: e.target.value })}
          value={recipe.servings}
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          min="1"
          name="instructions"
          id="instructions"
          onChange={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
        />
      </div>

      <hr />

      <p>Ingredients:</p>
      <div>
        <span>Name</span>
        <span>Amount</span>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div>
        <button onClick={() => handleIngredientAdd()}>Add Ingredient</button>
      </div>
    </div>
  );
}
