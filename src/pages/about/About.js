import React from "react";
import FeedBack from "./FeedBack";
//import rajeev from "../../images/rajeev.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      {/* <h1 style={{ color: "blue" }}>About Recipe Page</h1> */}
      <h3 style={{ color: "blue" }}>Welcome to my Recipe Page</h3>
      {/* <img src={rajeev} alt="rajeev" /> */}
      <p>
        This is my first react project. I have made this page for school project
        at
        <a href="https://www.bc.fi/">Business College Helsinki.</a>
      </p>
      <p>
        Everybody like eating but difficult part is how to make that recipe. In
        my page you can find some cool and easy steps to prepare dishes. I am
        not a chef but my hobby is cooking. Here I have collected easy steps
        recipes.{" "}
      </p>
      <p>
        {" "}
        The project requirement was to create our own API. The project RESTful
        API uses symfony in a PHP. You can get my project from{" "}
        <a href="https://github.com/rajeevRuhaan/homerecipe">my github repo</a>.
      </p>
      <p>Feedback Form</p>
      <FeedBack />
    </div>
  );
};

export default About;
