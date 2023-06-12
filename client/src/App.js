import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/homepage"
import Navbar from "./components/navbar"
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
