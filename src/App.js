import React, {useState} from "react";
import axios from "axios";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="App flex flex-col min-h-screen">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
