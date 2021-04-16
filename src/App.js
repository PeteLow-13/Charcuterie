import './App.css';
import Header from './Components/Header';
import React from "react";
import Cart from './Cart';
import Menu from './Menu';
import Topics from './Topics';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Footer from './Components/Footer';

// import Products from './Components/Products';
// import About from './Components/About';
// import Social from './Components/Social';
// import Contact from './Components/Contact';
// import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path="/menu">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    {/* <Header /> */}
      {/* <Gallery />
      <Products />
      <About />
      <Social />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
