import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MatchDetails from "./MatchDetails";
import Navbar from "./Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/matchDetails/:id" element={<MatchDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
