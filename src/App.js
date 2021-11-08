import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js'
import About from './components/About';
import Facts from './components/Facts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="about" element={<About />} />
          <Route path="facts" element={<Facts />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
