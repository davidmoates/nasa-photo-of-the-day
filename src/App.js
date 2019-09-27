import React from "react";
import axios from "axios";
import "./App.css";
import Apods from "./components";

function App() {

  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') //had to {sudo yarn add axios} to get this to work
    .then( response => {
      console.log(response);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  return (
    <div>
      <Apods />
    </div>
  );
}

export default App;
