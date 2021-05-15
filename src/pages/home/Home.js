import React from "react";
import Food from "../../images/food-header-unsplash.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to recipe book page. </h1>
      <img src={Food} alt="food" style={{ width: "100%" }} />
    </div>
  );
};

export default Home;
