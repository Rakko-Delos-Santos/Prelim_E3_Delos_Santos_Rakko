import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState({
    name: "Rakko Delos Santos",
    settings: {
      darkMode: false,
    },
  });

  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: {
        ...prevUser.settings,
        darkMode: !prevUser.settings.darkMode,
      },
    }));
  };

  return (
    <Router>
      <div
        className={
          user.settings.darkMode ? "bg-dark text-white" : "bg-light text-dark"
        }
        style={{ minHeight: "100vh" }}
      >
        {/* Navbar */}
        <Navbar user={user} toggleDarkMode={toggleDarkMode} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route
            path="/settings"
            element={<Settings user={user} toggleDarkMode={toggleDarkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
