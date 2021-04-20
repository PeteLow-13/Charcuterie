import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Router() {
    return (
        <div>
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
        </div>
    )
}

export default Router
