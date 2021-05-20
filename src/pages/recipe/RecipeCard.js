import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const RecipeCard = ({ image, name, description, link }) => {
  let match = useRouteMatch();

  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  // function deleteMe() {
  //   const r = window.confirm("do you really wan to delete this?");
  //   if (r === true) {
  //     <Link to={`${match.url}/${link}/remove`} />;
  //   }
  // }

  return (
    <div className="recipecard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p> {truncate(description, 50)} ...</p>
      <Link to={`${match.url}/${link}`}>Read more</Link>

      <Link to={`${match.url}/${link}/remove`}>Delete Card</Link>
    </div>
  );
};

export default RecipeCard;
