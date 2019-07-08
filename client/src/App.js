import React from 'react';
import Home from "./components/Pages/Home";
import Log from "./components/Pages/Log";
import List from "./components/Pages/List";
import SignIn from "./components/Pages/SignIn";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/log" component={Log} />
          <Route exact path="/list" component={List} />
          <Route exact path="/signin" component={SignIn} />
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
