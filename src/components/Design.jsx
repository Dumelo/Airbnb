import React from "react";

function Design(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <center>
        <img src={props.img} alt="pics" />
      </center>

      <center>
        <h2>{props.fields}</h2>
      </center>
      <ul>
        <li>{props.ul1}</li>
        <li>{props.ul2}</li>
        <li>{props.ul3}</li>
      </ul>
    </div>
  );
}

export default Design;
