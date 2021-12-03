import React, { useContext } from "react";
import { RecipeContext } from "../App";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { id, title, cook_time, servings, instructions, ingredients } = props;
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);

  return (
    <article>
      <header>
        <h3>{title}</h3>
      </header>
      <section>
        <p>
          <strong>Cook time:</strong> {cook_time}
        </p>
        <p>
          <strong>Servings:</strong> {servings}
        </p>
        <p>
          <strong>Instructions:</strong>
          <br />
          {instructions}
        </p>

        <aside>
          <button onClick={() => handleRecipeSelect(id)}>Edit</button>
          <button onClick={() => handleRecipeDelete(id)}>Delete</button>
        </aside>
      </section>
      <footer>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <IngredientList ingredients={ingredients} />
      </footer>
    </article>
  );
}
