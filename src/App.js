import "./App.css";
import { Featured } from "./Components/Layout/Featured/Featured";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { HotelCard } from "./Components/UI/HotelCard/HotelCard";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Featured/>
    </div>
  );
}

export default App;
