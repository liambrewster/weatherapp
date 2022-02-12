import React, {useState} from "react";
import axios from "axios";
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  //const Url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.REACT_APP_OPEN_WEATHER_APP_ID}`

  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
