import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Home.css";

import RowCreator from "./subcomponents/RowCreator";

class Home extends Component {
  state = {
    patientData: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/clinicalservices/api/patients")
      .then((response) => {
        const patientData = response.data;
        this.setState({ patientData });
        console.log(patientData);
      });
  }

  render() {
    return (
      <div>
        <h2>Patient:</h2>
        <table align="center">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.patientData.map((patient) => (
              <RowCreator item={patient} />
            ))}
          </tbody>
        </table>
        <br />
        <Link className="registerPatient" to={"/addPatient"}>
          <font size="5">Register Patient</font>
        </Link>
      </div>
    );
  }
}

export default Home;
