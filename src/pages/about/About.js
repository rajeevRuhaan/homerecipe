import React from "react";
import FeedBack from "./FeedBack";
import rajeev from "../../images/rajeev.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1 style={{ color: "blue" }}>About Recipe Page</h1>
      <h3>Welcome to my Recipe Page</h3>
      <img src={rajeev} alt="rajeev" />
      <p>
        This is my first react project. I have made this page for school
        project.
      </p>
      <p>
        Everybody like eating but difficult part is how to make that recipe. In
        my page you can find some cool and easy steps to prepare dishes. I am
        not a chef but my hobby is cooking. Here I have collected easy steps
        recipe what i prefer to cook and change the taste of tongue.{" "}
      </p>
      <p>Feedback Form</p>
      <FeedBack />
    </div>
  );
};

export default About;
