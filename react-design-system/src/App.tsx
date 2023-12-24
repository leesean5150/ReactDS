import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DashboardExample } from "./pages/Dashboard/dashboard.tsx";
import Homepage from "./pages/Homepage/homepage.tsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <a href="/">
          <img src="/images/home.png" alt="" className="homeIcon"></img>
        </a>
        <h1>React Design System</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="dashboard/*" element={<DashboardExample />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
