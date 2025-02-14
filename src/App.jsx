import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:city" element={<Details />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
