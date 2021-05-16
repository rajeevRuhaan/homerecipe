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
      //http://localhost:3001/recipes/${id}
      axios
        .get(`https://hidden-garden-15978.herokuapp.com/newrecipe/find/${id}`)
        .then((res) => {
          setRecipe(res.data);
        });
    }
  }, []);

  console.log("singleRecipe", singleRecipe);

  let recipeData = undefined;
  if (!singleRecipe) {
    recipeData = <h1>Loading...</h1>;
  }

  if (singleRecipe) {
    // const listIngredients = (ingredients) =>
    //   ingredients.map((ingredient) => (
    //     <li key={ingredient.id}>
    //       {ingredient.ingredientName} {ingredient.quantity}
    //     </li>
    //   ));

    recipeData = (
      <div className="card" style={{ width: "35rem" }}>
        <img
          src={singleRecipe.image}
          className="card-img-top"
          alt={singleRecipe.name}
        />
        <div className="card-body">
          <h5 className="card-title">{singleRecipe.name}</h5>
          <p className="card-text">{singleRecipe.description}</p>
        </div>
        <p>
          <b>Ingredients</b>
          {/* <ul>{listIngredients(singleRecipe.recipeIngredient)}</ul> */}
        </p>
        <ul>
          {singleRecipe.ingredients.map((item) => {
            return (
              <li key={item.id}>
                {item.ingredientName} {item.quantity}
              </li>
            );
          })}
        </ul>

        <p>
          <b>Instructions</b>
        </p>
        <ul>
          {singleRecipe.direction.map((item) => {
            return <li key={item.id}>{item.step}</li>;
          })}
        </ul>
        {/* <p>
          <b>Instructiion</b>
        </p>
        <ul>
          <li>{singleRecipe.dir}</li>
        </ul> */}
        <div>
          <button onClick={() => history.goBack()} className="btn btn-primary">
            Back to Recipe List
          </button>
        </div>
      </div>
    );
  }

  return <div>{recipeData}</div>;
};

export default SingleRecipe;
