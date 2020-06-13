import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "../ReactToastify.css";
toast.configure();

class AddPatient extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };

    axios
      .post("http://localhost:8080/clinicalservices/api/patients", data)
      .then((response) => {
        toast("Patient added successfully!", {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  }

  render() {
    return (
      <div>
        <h2 style={{ fontSize: "20px" }}>Create Patient</h2>
        <form>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            onChange={(event) => (this.firstName = event.target.value)}
          />
          <br />
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            onChange={(event) => (this.lastName = event.target.value)}
          />
          <br />
          Age:{" "}
          <input
            type="text"
            name="age"
            onChange={(event) => (this.age = event.target.value)}
          />
          <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
        </form>
        <Link to={"/"}>Go Back</Link>
      </div>
    );
  }
}

export default AddPatient;
