import React from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div className="Projects">
      <img className="proj-photo" src={props.img} alt="Projects" />
      <div className="proj-text">
        <h3 className="proj-title">{props.title}</h3>
        <p className="proj-description">{props.description}</p>
 
      </div>
    </div>
  );
}



