import './App.css';
import Labs from './Labs';
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
      <div>
        <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
        </HashRouter>
      </div>

  );
}


