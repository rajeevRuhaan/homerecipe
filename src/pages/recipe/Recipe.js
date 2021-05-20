import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
import DeleteRecipe from "./DeleteRecipe";

import SearchBox from "../../components/search/SearchBox";

import axios from "axios";
import RecipeList from "./RecipeList";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let match = useRouteMatch();
  console.log(match);

  const searchValueHandler = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    axios
      //http://localhost:3001/recipes
      //https://hidden-garden-15978.herokuapp.com/newrecipe/all
      .get("https://hidden-garden-15978.herokuapp.com/newrecipe/all")
      .then((res) => setRecipe(res.data));
  }, []);
  // console.log("recipe", recipe);

  const recipeFilter = recipe.filter((filterRecipe) => {
    return filterRecipe.name
      .toLocaleLowerCase()
      .includes(searchInput.toLocaleLowerCase());
  });
  console.log("recipeFilter", recipeFilter);

  return (
    <main>
      <Switch>
        <Route path={`${match.path}/:id`} exact>
          <SingleRecipe />
        </Route>
        <Route path={`${match.path}/:id/remove`}>
          <DeleteRecipe />
        </Route>
        <Route path="/recipe">
          <SearchBox search={searchValueHandler} />
          {/* <div className="recipelist">{list}</div> */}
          <RecipeList getRecipes={recipeFilter} />
        </Route>
      </Switch>
    </main>
  );
};

export default Recipe;
