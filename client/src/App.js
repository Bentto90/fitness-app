import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/homepage"
import Navbar from "./components/navbar"
import Register from './pages/register';
import WorkoutScheduler from './pages/WorkoutScheduler';
import Exercises from './pages/Exercises';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path ="workoutScheduler" element={<WorkoutScheduler />} />
        <Route path ="exercises" element={<Exercises />} />
      </Routes>
    </div>
  );
}

export default App;
