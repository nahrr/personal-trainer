import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import AddWorkout from "./components/workout/AddWorkout";
import Workout from "./components/workout/Workout";
import Schedule from "./pages/schedule/Schedule";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="page_wrapper">
          <Routes>
            <Route path="/" element={<Schedule />} />
            <Route path="/workout/:exerciseId" element={<Workout />} />
            <Route path="/add-workout" element={<AddWorkout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
