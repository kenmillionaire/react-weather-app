import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <h1>Weather App</h1>
        <button className="btn btn-primary">Home</button> */}
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/kehinde-oyeronke-osoba/"
            target="_blank"
            rel="noreferrer"
          >
            Kehinde Oyeronke Osoba
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kenmillionaire/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
