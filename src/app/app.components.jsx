// Modules
import React from "react";

// Components
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../layouts";

// Style
import "./app.styles.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to="/dashboard" element={<DashboardLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
