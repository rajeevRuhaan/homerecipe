import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    recipeIngredient: [],
    image: "",
    direction: [],
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, ingredientName: "", quantity: "" },
  ]);

  const [recipeStep, setRecipeStep] = useState([{ id: 1, step: "" }]);

  const changeStep = (e, i) => {
    const { name, value } = e.target;
    const listStep = [...recipeStep];
    listStep[i][name] = value;
    setRecipeStep(listStep);
    setData({ ...data, direction: recipeStep });
  };

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[i][name] = value;
    setIngredients(list);
    setData({ ...data, recipeIngredient: ingredients });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newInc = {
      id: ingredients.length + 1,
      ingredientName: "",
      quantity: "",
    };
    setIngredients([...ingredients, newInc]);
  };

  const addStep = (e, i) => {
    e.preventDefault();
    const newStep = { id: ingredients.length + 1, step: "" };
    setRecipeStep([...recipeStep, newStep]);
  };

  // const deleteStep = (e, i) => {
  //   e.preventDefault();
  //   const oldStep = { id: ingredients.length - 1, step: "" };
  //   setRecipeStep([...recipeStep, oldStep]);
  // };

  const submitData = (e) => {
    e.preventDefault();
    //http://localhost:3001/recipes
    //https://hidden-garden-15978.herokuapp.com/newrecipe/add
    axios.post("https://hidden-garden-15978.herokuapp.com/newrecipe/add", data);
    e.target.reset();
  };

  return (
    <Form onSubmit={submitData}>
      <Form.Group>
        <Form.Label htmlFor="">Name</Form.Label>
        <Form.Control type="text" name="name" onChange={changeData} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="description"
          onChange={changeData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Image url</Form.Label>
        <Form.Control type="text" name="image" onChange={changeData} />
      </Form.Group>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label htmlFor="">Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="quantity"
                    onChange={(e) => changeIncData(e, i)}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="">Ingredient</Form.Label>
                  <Form.Control
                    type="text"
                    name="ingredientName"
                    onChange={(e) => changeIncData(e, i)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>
        );
      })}

      <Button variant="outline-success" onClick={addMore}>
        add more
      </Button>

      <p>Instruction</p>
      {recipeStep.map((_, i) => {
        return (
          <div key={i}>
            <Form.Group>
              <Form.Label htmlFor="">Steps</Form.Label>
              <Form.Control
                // as="textarea"
                // rows={1}
                type="text"
                name="step"
                onChange={(e) => changeStep(e, i)}
              ></Form.Control>
            </Form.Group>
          </div>
        );
      })}

      <Button variant="outline-success" onClick={addStep}>
        Add More Step
      </Button>
      {/* <Button variant="outline-success" onClick={deleteStep}>
        Delet Step
      </Button> */}

      {/* <Form.Group>
        <Form.Label>Directions</Form.Label>
        <Form.Control as="textarea" rows={3} name="dir" onChange={changeData} />
      </Form.Group> */}
      <div className="postbutton">
        <Button type="submit" variant="success" value="Send data">
          Post recipe
        </Button>
      </div>
    </Form>
  );
};

export default RecipeForm;
