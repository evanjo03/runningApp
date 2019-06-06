import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
