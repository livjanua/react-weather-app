import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/livjanua">Olivia J</a> and is open-sourced
          on{" "}
          <a
            href="https://github.com/livjanua/react-weather-app"
            target="_blank" rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
