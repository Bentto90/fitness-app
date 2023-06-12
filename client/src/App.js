import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/homepage"
import Navbar from "./components/navbar"
import Register from './pages/register';
import Login from './pages/login';
import WorkoutScheduler from './pages/WorkoutScheduler';
import Exercises from './pages/Exercises';
import FoodSearch from './components/FoodSearch';
import WorkoutSplit from './components/WorkoutSplit';

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
        <Route path ="workoutSplit" element={<WorkoutSplit />} />
      </Routes>
    </div>
  );
}

export default App;
