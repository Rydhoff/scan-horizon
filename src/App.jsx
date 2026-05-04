import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuildingMap from "./pages/BuildingMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/:buildingId" element={<BuildingMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;