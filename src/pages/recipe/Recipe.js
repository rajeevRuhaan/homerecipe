import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
import RecipeList from "./RecipeList";
import SearchBox from "../../components/SearchBox";

import axios from "axios";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let match = useRouteMatch();
  //console.log(match);

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
  console.log("recipeFilete", recipeFilter);

  // const recipeList = recipeFilter.map((a) => {
  //   return <RecipeList getRecipes={a} />;
  // });

  return (
    <main>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <SingleRecipe />
        </Route>
        <Route path="/recipe">
          <SearchBox search={searchValueHandler} />
          {/* <div>{recipeList}</div> */}
          <RecipeList getRecipes={recipe} />
        </Route>
      </Switch>
    </main>
  );
};

export default Recipe;
