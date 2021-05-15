import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ getRecipes }) => {
  console.log("getrecipes", getRecipes);

  return (
    <div className="recipelist">
      {getRecipes.map((a) => (
        <RecipeCard
          key={a.id}
          name={a.name}
          image={a.image}
          description={a.description}
          link={a.id}
        />
      ))}
    </div>
  );
};

export default RecipeList;
