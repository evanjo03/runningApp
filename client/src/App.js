import React from 'react';
import Home from "./components/Pages/Home";
import Log from "./components/Pages/Log";
import List from "./components/Pages/List";
import { Container } from "reactstrap"
// import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"
import SignIn from "./components/Pages/SignIn";
import Footer from "./components/Footer";
import Chart from "./components/Chart"
// import StickyFooter from 'react-sticky-footer';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Router >
        <div className ="wrapper">
          <Navigation/>
          <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/log" component={Log} />
          <Route exact path="/list" component={List} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/chart" component={Chart} />
          </Container>
          <Footer/>
        </div>
        
      </Router>
      
    </div>
  );
}

export default App;
