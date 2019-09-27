
import React, { useState, useEffect } from "react";
import axios from "axios";

export function Apods(props) {

  const [apod, setApod] = useState([]);

  useEffect(() => {

    console.log("this effect is executed when the apod state var is updated.");
    axios
      .get("https://ghibliapi.herokuapp.com/apod")
      .then(result => {
        setApod(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {apod.map(img => {
        return (
          <MovieCard
            title={img.title}
            description={img.description}
            key={img.id}
          />
        );
      })}
    </div>
  );
}
