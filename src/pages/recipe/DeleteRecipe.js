import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";

const DeleteRecipe = () => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.post(
      `https://hidden-garden-15978.herokuapp.com/newrecipe/remove/${id}`
    );
  });

  return (
    <div>
      <h3>The recipe card ${id} has been delted successfully</h3>

      <div>
        <button onClick={() => history.goBack()} className="btn btn-primary">
          Back to Recipe List
        </button>
      </div>
    </div>
  );
};

export default DeleteRecipe;
