import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { Home } from "./Components/Page/Home/Home";
import { Registry } from "./Components/Page/Registry/Registry";
import { Login } from "./Components/Page/Login/Login";
import { CreateAnounceForm } from "./Components/Layout/CreateAnounceForm/CreateAnounceForm";
import { Footer } from "./Components/Layout/Footer/Footer";
import { EventZone } from "./Components/Page/EventZone/EventZone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/zonaeventos" element={<EventZone/>} />
            <Route exact path="/registro" element={<Registry/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/crearanuncio" element={<CreateAnounceForm/>} />
            <Route path="*" element={<div>Pagina no encontrada</div>} />
            <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
