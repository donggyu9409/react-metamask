import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Campaign from "./pages/Campaign";
import Content1 from "./pages/Content1";
import Content2 from "./pages/Content2";
import Content3 from "./pages/Content3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/content1" element={<Content1 />} />
        <Route path="/content2" element={<Content2 />} />
        <Route path="/content3" element={<Content3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
