import React from 'react';


const Card = (props) => {

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
      />
      <div>
        <p>
          {props.copyright}
          <span src={props.hdurl}>Hi-Res Img</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
