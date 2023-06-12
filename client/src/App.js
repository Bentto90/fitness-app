import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/homepage"
import Navbar from "./components/navbar"
import Register from './pages/register';
import WorkoutScheduler from './pages/WorkoutScheduler';
import Exercises from './pages/Exercises';
import Login from './pages/login';
import FoodSearch from './components/FoodSearch';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path ="login" element={<Login />} />
        <Route path ="workoutScheduler" element={<WorkoutScheduler />} />
        <Route path ="exercises" element={<Exercises />} />
        <Route path ="foodSearch" element={<FoodSearch />} />
      </Routes>
    </div>
  );
}

export default App;
