import React from "react";
import "./App.css";
import APOD from './components/APOD';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <APOD/>
    </div>
  );
}

export default App;
