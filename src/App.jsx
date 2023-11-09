import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Pengertian from "./components/Pengertian";
import Konversi from "./views/Konversi";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Pengertian} />
        <Route path="/konversi_suhu" Component={Konversi} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
