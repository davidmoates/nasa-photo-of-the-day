import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from "./apodCard";

export default function Apods(props) {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    console.log("this effect is executed when the apod state var is updated.");
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=iMZDV67iJVxqg1nh1BTK7GFS1S9GeeS9txAMgbxH")
      .then(result => {
        console.log(result);
        setApod(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
      {apod.map(img => {
        return (
          <ApodCard
            title={img.title}
            explanation={img.explanation}
            date={img.date}
            hdurl={img.hdurl}
            url={img.url}
            copyright={img.copyright}
          />
        );
      })}
  );
}
