import React from 'react';
import Home from "./components/Pages/Home";
import Log from "./components/Pages/Log";
import List from "./components/Pages/List";
import Navbar from "./components/Navbar"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/log" component={Log} />
          <Route exact path="/list" component={List} />
        </div>
      </Router>
    </div>
  );
}

export default App;
