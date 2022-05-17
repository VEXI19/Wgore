import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import React, { createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cennik from "./pages/Cennik/Cennik";
import { Route, Routes } from "react-router-dom";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import Aktualnosci from "./pages/Aktualnosci/Aktualnosci";
import Akademia from "./pages/Akademia/Akademia";
import ONas from "./pages/ONas/ONas";
import Kontakt from "./pages/Kontakt/Kontakt";
import JakZaczac from "./pages/JakZaczac/JakZaczac";
import Sekcje from "./pages/Sekcje/Sekcje";
import Telefony from "./pages/Telefony/Telefony";
import Galeria from "./pages/Galeria/Galeria";
import Admin from "./pages/Admin/Admin";

export const WindowWidthContext = createContext();
export const ClickContext = createContext();

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const [clickEvent, setClickEvent] = React.useState(null);
  window.addEventListener("click", (ev) => setClickEvent(ev));

  return (
    <div
      className="App"
      style={
        // to avoid top bar covering page content
        windowWidth < 800
          ? { marginTop: "calc(clamp(35px, 13vw, 55px) + 1em)" }
          : {}
      }
    >
      <ClickContext.Provider value={clickEvent}>
        <WindowWidthContext.Provider value={windowWidth}>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cennik" element={<Cennik />} />
            <Route path="/aktualnosci" element={<Aktualnosci />} />
            <Route path="/akademia" element={<Akademia />} />
            <Route path="/onas" element={<ONas />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/jakzaczac" element={<JakZaczac />} />
            <Route path="/sekcje" element={<Sekcje />} />
            <Route path="/telefonydoinstruktorow" element={<Telefony />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
          <BottomMenu />
        </WindowWidthContext.Provider>
      </ClickContext.Provider>
    </div>
  );
}

export default App;
