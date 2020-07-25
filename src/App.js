import React from 'react';
import WeatherLocation from "./components/WeatherLocation"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <WeatherLocation />
        </p>
      </header>
    </div>
  );
}

export default App;
