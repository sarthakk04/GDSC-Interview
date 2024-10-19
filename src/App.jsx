import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Teams from "./Pages/teams";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./Components/navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar1 /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
