import React from "react";

export function ApodCard(props) {

  handleClick() {
    return <p>{props.explanation}</p>
  }

  return (
    <div>
      <div>
        <h3>{props.title}{props.date}</h3>
      </div>
      <div>
        <img src={props.url} alt={props.title} onClick={() => return handleClick() />
      </div>
      <div>
        <p>{props.copyright}<span src={props.hdurl}>Hi-Res Img</span></p>
      </div>
    </div>
  );
}
