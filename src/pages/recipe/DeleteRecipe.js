import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory, Link, useRouteMatch } from "react-router-dom";

import axios from "axios";

const DeleteRecipe = () => {
  let match = useRouteMatch();
  const { id } = useParams();
  const history = useHistory();
  console.log(history);
  console.log(match);
  useEffect(() => {
    axios.post(
      `https://hidden-garden-15978.herokuapp.com/newrecipe/remove/${id}`
    );
  });

  return (
    <div>
      <h3>The recipe card ${id} has been delted successfully</h3>

      <div>
        <Link to={`/recipe`} className="btn btn-primary">
          Back to Recipe List
        </Link>
      </div>
    </div>
  );
};

export default DeleteRecipe;
