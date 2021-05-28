import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataState from "./context/data/DataState";
import Home from "./components/pages/Home";
import TimeSeriesPage from "./components/pages/TimeSeriesPage";
import ComparationPage from "./components/pages/ComparationPage";

function App() {


  return (
    <>
      <DataState>
      {/* react router is used for routing to diffent pages without page refresh */}
        <Router>
          <div style={{ marginTop: "80px" }}>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/timeseriespage" component={TimeSeriesPage} />

              <Route
                exact
                path="/comparationPage"
                component={ComparationPage}
              />
            </Switch>
          </div>
          <Navbar />
        </Router>
      </DataState>
    </>
  );
}

export default App;
