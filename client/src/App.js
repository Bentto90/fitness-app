import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/homepage"
import Navbar from "./componets/navbar"
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
