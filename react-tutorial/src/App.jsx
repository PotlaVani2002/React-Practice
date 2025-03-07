import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Sample from "./components/Register/Sample";
import Firstpage from "./components/pages/Firstpage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/sample" element={<Sample />} />
        <Route path="/home" element={<Home />} />
        <Route path="/firstpage/:id" element={<Firstpage />} />
      </Routes>
    </Router>
  );
}

export default App;
