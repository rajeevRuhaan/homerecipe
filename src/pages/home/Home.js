import React from "react";
import Food from "../../images/food-header-unsplash.jpg";
//import Cooking from "../../video/cooking.mp4";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to recipe book page. </h1>
      <img src={Food} alt="food" style={{ width: "100%" }} />
      {/* <video
        className="video-container video-container-overlay"
        autoPlay="true"
      >
        <source src={Cooking} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Home;
