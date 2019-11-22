import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaComponent from './Component/NasaComponent';




function App() {


  const [picData, setPicData] = useState([]);


  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=6ASOBSZgzfJUdqvTIrUQVFIU0wWs63jQQWAxjPV1")
    .then(response => {
      console.log(response);
      setPicData(response.data);
    })
    .catch(error => {
      console.log("Error:", error);
    })
  },[])


  return (
    <div className="App">
      {console.log(picData)}
      <NasaComponent cData = {picData}/>
    </div>
  );
}

export default App;
