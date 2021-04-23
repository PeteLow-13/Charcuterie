import './App.css';
import Header from './Components/Header';
import React from "react";
import Cart from './Pages/Cart';
import Menu from './Pages/Menu';
import Topics from './Pages/Topics';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Nav2 from './Components/Nav2';
import Nav from 'react-bootstrap/Nav' 


function App() {
  return (
    <div className="App">
    <Nav2 />
      <Router> 
        <div>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path='/menu'>
              <Menu />
            </Route>
            <Route path="/contactpage">
              <ContactPage />
            </Route>
            <Route path="/aboutpage">
              <AboutPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
