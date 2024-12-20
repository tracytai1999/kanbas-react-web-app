import './App.css';
import Labs from './Labs';
import Kanbas from "./Kanbas";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}


