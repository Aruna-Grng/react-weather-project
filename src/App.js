import './App.css';
import WeatherSearch from "./Components/WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Dallas" />
      </div>
    </div>
  );
}

export default App;
