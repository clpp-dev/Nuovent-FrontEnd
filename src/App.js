import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { Home } from "./Components/Page/Home/Home";
import { HotelCard } from "./Components/UI/HotelCard/HotelCard";
import { Registry } from "./Components/Page/Registry/Registry";
import { Login } from "./Components/Page/Login/Login";
import { CreateAnounceForm } from "./Components/Layout/CreateAnounceForm/CreateAnounceForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/zonaeventos" element={<HotelCard/>} />
            <Route path="/registro" element={<Registry/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/crearanuncio" element={<CreateAnounceForm/>} />
            <Route path="*" element={<div>Pagina no encontrada</div>} />
            <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
