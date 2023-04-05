import { NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Profile from "./pages/Profile";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";


function App() {
  const [userLogin, setUserLogin] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home userLogin={userLogin} setUserlogin={setUserLogin} />} />
        <Route path="/profile/:studentId" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin userLogin={userLogin} setUserLogin={setUserLogin} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <nav>
        <NavLink replace to="/" className="inactive-link" exact>
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">Home</span>
            ) : (
              <span>Home</span>
            )
          }
        </NavLink>
        <NavLink replace to="/about" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">About</span>
            ) : (
              <span>About</span>
            )
          }
        </NavLink>
        <NavLink replace to="/contact" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">Contact</span>
            ) : (
              <span>Contact</span>
            )
          }
        </NavLink>
        <NavLink replace to="/profile/209" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">Profile</span>
            ) : (
              <span>Profile</span>
            )
          }
        </NavLink>
        <NavLink replace to="/admin" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">For Admin!!</span>
            ) : (
              <span>For Admin!!</span>
            )
          }
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
