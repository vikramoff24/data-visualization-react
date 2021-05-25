import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
