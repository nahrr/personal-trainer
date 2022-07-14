import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navBar/NavBar";
import AddWorkout from "./components/addWorkout/AddWorkout";
import Workout from "./components/workout/Workout";
import Schedule from "./pages/schedule/Schedule";
import "./styles/global.scss";
import Profile from "./pages/profile/Profile";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="page_wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add-workout"
              element={<ProtectedRoute component={AddWorkout} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />
            <Route
              path="/workout/:exerciseId"
              element={<ProtectedRoute component={Workout} />}
            />
            <Route
              path="/Schedule"
              element={<ProtectedRoute component={Schedule} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
