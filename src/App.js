import './App.css';
// import React, { useState } from 'react';
import Nav from "./components/Header";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App () {
    return (
        <Router>
           <Nav />
           <Switch>
           <Route exact path="/reactPortfolio/">
               <Home />
           </Route>
           <Route exact path="/Home">
               <Home />
           </Route>
           <Route exact path="/About">
               <About />
           </Route>
           <Route exact path="/Portfolio">
               <Portfolio />
           </Route>
           <Route exact path="/Contact">
               <Contact />
           </Route>
           </Switch>
           <Footer />
        </Router>
    )
}

export default App;