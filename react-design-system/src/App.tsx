import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Test } from "./pages/Test/index.tsx";
import { DashboardExample } from "./pages/DashboardExample/dashboard.tsx";
import { DashboardCode } from "./pages/DashboardCode/index.tsx";
import { Homepage } from "./pages/Homepage/homepage.tsx";

import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="App">
      <header className="AppHeader">
        <button onClick={handleHome}>
          <img src="/images/home.png" alt="" className="homeIcon"></img>
        </button>
        <h1>React Design System</h1>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="dashboard/*" element={<DashboardExample />} />
        <Route path="dashboard-code" element={<DashboardCode />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
