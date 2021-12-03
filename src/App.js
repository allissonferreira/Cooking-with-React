import React, { useEffect, useState } from "react";
import RecipeList from "./components/RecipeList";
import uuidv4 from "uuid/dist/v4";
import "./styles/app.css";
import RecipeEdit from "./components/RecipeEdit";

const recipeArray = [
  {
    id: 1,
    title: "Plain Chicken",
    cook_time: "1:45",
    servings: 3,
    instructions: "1. Add salt\n2. Cook\n3. Eat",
    ingredients: [
      { id: 1, name: "Chicken", amount: "2 Pounds" },
      { id: 2, name: "Salt", amount: "1 Tbsp" },
    ],
  },
  {
    id: 2,
    title: "Plain Pork",
    cook_time: "2:45",
    servings: 2,
    instructions: "1. Add salt\n2. Cook\n3. Eat",
    ingredients: [
      { id: 1, name: "Pork", amount: "3 Pounds" },
      { id: 2, name: "Salt", amount: "1 Tbsp" },
    ],
  },
  {
    id: 3,
    title: "Plain Lamb",
    cook_time: "0:45",
    servings: 1,
    instructions: "1. Add salt\n2. Cook\n3. Eat",
    ingredients: [
      { id: 1, name: "Lamb", amount: "1 Pound" },
      { id: 2, name: "Salt", amount: "1 Tbsp" },
    ],
  },
  {
    id: 4,
    title: "Raw Fish",
    cook_time: "0:00",
    servings: 1,
    instructions: "1. Eat",
    ingredients: [{ id: 1, name: "Fish", amount: "Any" }],
  },
];

const LOCAL_STORAGE_KEY = "@CookingWIthReact:recipes";

export const RecipeContext = React.createContext();

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [recipes, setRecipes] = useState(recipeArray);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = () => {
    const recipe = {
      id: uuidv4(),
      title: "",
      servings: 1,
      cook_time: "",
      instructions: "",
      ingredients: [{ id: uuidv4(), name: "", amount: "" }],
    };

    setSelectedRecipeId(recipe.id);
    setRecipes([...recipes, recipe]);
  };
  const handleRecipeDelete = (id) => {
    if (selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }

    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };
  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };
  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id === id);

    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  };

  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  return (
    <RecipeContext.Provider value={RecipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

export default App;
