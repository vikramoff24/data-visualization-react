import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataState from "./context/data/DataState";
import Home from "./components/pages/Home";
import TimeSeriesPage from "./components/pages/TimeSeriesPage";
import ComparationPage from "./components/pages/ComparationPage";

function App() {
  useEffect(() => {
    const datestr = "21/03/19,09:08:28";

    const updateddate = datestr.replace(/\//g, "-");
    const updatedtdate = updateddate.replace(/,/, "T");
    const exactDate = "20" + updatedtdate;
    console.log(new Date(exactDate));
  }, []);

  return (
    <>
      <DataState>
        <Router>
          <div style={{ marginTop: "80px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} /> */}
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
