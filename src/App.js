import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import MyStake from "./components/Pages/MyStake";
import Staking from "./components/Staking";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Staking />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-stake" element={<MyStake />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
