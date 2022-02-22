import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { Home, About, Blog } from "./pages";

export default function App(props) {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
