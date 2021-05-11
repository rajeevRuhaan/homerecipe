import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";

const SingleRecipe = () => {
  const [singleRecipe, setRecipe] = useState();
  const { id } = useParams();
  const history = useHistory();

  console.log({ id });

  useEffect(() => {
    if (!singleRecipe) {
      axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
        setRecipe(res.data);
      });
    }
  });

  console.log("singleRecipe", singleRecipe);

  let recipeData = undefined;
  if (!singleRecipe) {
    recipeData = <h1>Loading...</h1>;
  }

  if (singleRecipe) {
    recipeData = (
      <div className="card" style={{ width: "20 rem" }}>
        <img
          src={singleRecipe.image}
          className="card-img-top"
          alt={singleRecipe.name}
        />
        <div className="card-body">
          <h5 classname="card-title">{singleRecipe.name}</h5>
          <p className="card-text">{singleRecipe.desc}</p>
        </div>
        <p>
          <b>Ingredients</b>
        </p>
        <ul>
          {singleRecipe.inc.map((item) => {
            return (
              <li key={item.id}>
                {item.incName} {item.quantity}
              </li>
            );
          })}
        </ul>
        <p>
          <b>Instructiion</b>
        </p>
        <ul>
          <li>{singleRecipe.dir}</li>
        </ul>
        <div>
          <button onClick={() => history.goBack()} className="btn btn-primary">
            Back to Recipe List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>hello single recipe</p>
      {recipeData}
    </div>
  );
};

export default SingleRecipe;
