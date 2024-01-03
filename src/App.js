import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Apps from "./pages/Apps";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} index />
      <Route path="/services" element={<Services />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<Error404 />} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  </BrowserRouter>
);

export default App;