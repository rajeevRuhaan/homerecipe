import React, { useState } from "react";
import { Link, useRouteMatch, Redirect } from "react-router-dom";

const RecipeCard = ({ image, name, description, link }) => {
  let match = useRouteMatch();
  let [redirectPage, setRedirectPage] = useState(false);

  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  function deleteMe() {
    const r = window.confirm("Do you really want to delete this?");
    if (r === true) {
      setRedirectPage(true);
      // <Link to={`${match.url}/${link}/remove`} />;
      //   window.location.pathname = `${match.url}/${link}/remove`;
    }
  }

  return (
    <div className="recipecard">
      {redirectPage && <Redirect to={`${match.url}/${link}/remove`} />}

      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p> {truncate(description, 50)} ...</p>
      <Link to={`${match.url}/${link}`}>Read more</Link>
      <button onClick={deleteMe}>Delete</button>

      {/* <Link
        to={`${match.url}/${link}/remove`}
        style={{
          display: "flex-inline",
          flexDirection: "row",
          marginLeft: "10rem",
        }}
      >
        Delete Card
      </Link> */}
    </div>
  );
};

export default RecipeCard;
