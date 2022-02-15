import "./App.css";
import { Featured } from "./Components/Layout/Featured/Featured";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { Home } from "./Components/Page/Home/Home";
import { HotelCard } from "./Components/UI/HotelCard/HotelCard";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/zonaeventos" element={<HotelCard/>} />
          <Route path="/registro" element={<HotelCard/>} />
          <Route path="/login" element={<HotelCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

{/* <div className="App">
  <Home/>
</div> */}

export default App;
