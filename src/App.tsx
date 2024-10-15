import './App.css';
import Labs from './Labs';
import Kanbas from "./Kanbas";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
        </BrowserRouter>
      </div>

  );
}


