import React, { Component } from "react";
import axios from "axios";

import TableCreator from "./subcomponents/TableCreator";

class AnalyzeData extends Component {
  state = { clinicalData: [] };
  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/clinicalservices/api/patients/analyze/" +
          this.props.match.params.patientId
      )
      .then((response) => {
        this.setState(response.data);
        console.log(response.data);
      });
  }
  render() {
    return (
      <div>
        <h2>Patient Details:</h2>
        First Name: {this.state.firstName}
        <br />
        Last Name: {this.state.lastName}
        <br />
        Age: {this.state.age}
        <h2>Clinical Report:</h2>
        {this.state.clinicalData.map((eachEntry) => (
          <TableCreator item={eachEntry} patientId={this.state.id} />
        ))}
      </div>
    );
  }
}

export default AnalyzeData;
