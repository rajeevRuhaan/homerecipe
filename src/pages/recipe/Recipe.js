import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
import RecipeList from "./RecipeList";

import axios from "axios";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  let match = useRouteMatch();
  console.log(match);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then((res) => setRecipe(res.data));
  }, []);
  console.log("recipe", recipe);

  return (
    <main>
      <p> here is comming recipe ....</p>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <SingleRecipe />
        </Route>
        <Route path="/recipe">
          <RecipeList getRecipes={recipe} />
        </Route>
      </Switch>
    </main>
  );
};

export default Recipe;
