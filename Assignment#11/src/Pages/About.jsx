import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div pt={5}> 
      <h1>This is About page</h1>
      <div>
        <button className="buttonLogin" onClick={navigateToHome}>Redirect</button>
      </div>
    </div>
  );
}

export default About;