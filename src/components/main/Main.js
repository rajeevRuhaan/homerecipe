import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Recipe from "../../pages/recipe/Recipe";
import RecipeForm from "../../pages/recipeform/RecipeForm";

const Main = () => {
  return (
    <section style={{ margin: "100px" }}>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/recipe" component={Recipe} />
          <Route path="/form" component={RecipeForm} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </section>
  );
};

export default Main;
