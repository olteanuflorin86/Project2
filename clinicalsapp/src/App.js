import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import AnalyzeData from "./components/AnalyzeData";
import ChartGenerator from "./components/ChartGenerator";
import CollectClinicals from "./components/CollectClinicals";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/patientDetails/:patientId"
            component={CollectClinicals}
          />
          <Route exact path="/addPatient" component={AddPatient} />
          <Route exact path="/analyze/:patientId" component={AnalyzeData} />
          <Route
            exact
            path="/chart/:componentName/:patientId"
            component={ChartGenerator}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
