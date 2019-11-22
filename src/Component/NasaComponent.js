import React from "react";
import styled from 'styled-components';



const NasaComponent = (props) => {






  return (
    <div>
      <div>
        <h3>
          {props.cData.title}<br />
          {props.cData.date}
        </h3>
      </div>
      <img
        src={props.cData.url}
        alt={props.cData.title}
      />
      <div>
        <p>
          {props.cData.copyright}
          <span src={props.cData.hdurl}>Hi-Res Img</span>
        </p>
      </div>
    </div>
  );
};
export default NasaComponent;
