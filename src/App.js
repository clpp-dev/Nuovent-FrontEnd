import "./App.css";
import { Featured } from "./Components/Layout/Featured/Featured";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { Home } from "./Components/Page/Home/Home";
import { HotelCard } from "./Components/UI/HotelCard/HotelCard";
import jwt_decode from "jwt-decode";

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
          <Route path="/zonaeventos" element={<HotelCard/>} />
          <Route path="/registro" element={<HotelCard/>} />
          <Route path="/login" element={<HotelCard/>} />
          <Route path="*" element={<div>Pagina no encontrada</div>} />
          <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

{/* <div className="App">
  <Home/>
</div> */}

export default App;
