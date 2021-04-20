import './App.css';
// import CityDisplay from './Components/CityDisplay';
import WeatherSearch from "./Components/WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Austin" />
        {/* <CityDisplay icon="CLEAR_DAY" size={200} /> */}
      </div>
    </div>
  );
}

export default App;
