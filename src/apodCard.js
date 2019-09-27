import React, { useState } from "react";

export default function ApodCard(props) {
  const [showList, setShowList] = useState(true);

  if (!showList) {
    return (
      <div>
        <div>
          <h3>
            {props.title}
            {props.date}
          </h3>
        </div>
        <img
          src={props.url}
          alt={props.title}
          onClick={() => setShowList(!showList)}
        />
        <div>
          <p>
            {props.copyright}
            <span src={props.hdurl}>Hi-Res Img</span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h3>
            {props.title}
            {props.date}
          </h3>
        </div>
        <p onClick={() => setShowList(!showList)}>{props.explanation}</p>
        <div>
          <p>
            {props.copyright}
            <span src={props.hdurl}>Hi-Res Img</span>
          </p>
        </div>
      </div>
    );
  }
}
