import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const RecipeCard = ({ image, name, desc, link }) => {
  let match = useRouteMatch();

  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p> {truncate(desc, 50)} ...</p>
      <Link to={`${match.url}/${link}`}>Read more</Link>
    </div>
  );
};

export default RecipeCard;
