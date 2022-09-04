import React from "react";

export default function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2> {props.title} </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis doloribus natus! Fuga ipsum expedita quibusdam fugiat repellendus? Eius suscipit perspiciatis ipsa, nam a deleniti, ut iure, provident exercitationem amet qui? Eveniet ipsum atque voluptatum nobis incidunt!</p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}