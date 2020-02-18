import React from "react";
import "./Experience.css";

  export default function Experience(props) {
    return (
      <div className = "Experience">
        <h3 className="exp-title">{props.title} </h3>
        <p className="exp-dates">{props.dates}</p>
        <p className="exp-bulletone">{props.bulletone}</p>
        <p className="exp-bullettwo">{props.bullettwo}</p>
      </div>
  );
}


