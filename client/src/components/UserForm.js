import React, { Component } from "react";
import PersonalField from "./PersonalField";
import WorkField from "./WorkField";
import ConfirmForm from "./ConfirmForm";
import Technologies from "./Technologies";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    location: "",
    age: "",
    education: "",
    occupation: "",
    technologiesUsed: [],
    others: "",
    workBio: "",
    website: "",
    availability: "",
    githubAccount: ""
  };
  nextStep = e => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = e => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  handleCheck = e => {
    // current array of technologiesUsed
    const technologiesUsed = this.state.technologiesUsed;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      //check if its already in the array
      if (!technologiesUsed.includes(e.target.value)) {
        // add the value of the checkbox to technologiesUsed array
        return technologiesUsed.push(e.target.value);
      }
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = technologiesUsed.indexOf(e.target.value);
      technologiesUsed.splice(index, 1);
    }
    // update the state with the new array of technologiesUsed
    this.setState({ technologiesUsed });
  };
  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      location,
      age,
      education,
      occupation,
      workBio,
      technologiesUsed,
      others,
      website,
      availability,
      githubAccount
    } = this.state;
    const values = {
      firstName,
      lastName,
      phoneNumber,
      email,
      location,
      age,
      education,
      occupation,
      workBio,
      website,
      availability,
      githubAccount,
      others,
      technologiesUsed
    };

    switch (step) {
      case 1:
        return (
          <PersonalField
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <React.Fragment>
            <Technologies
              technologiesUsed={this.state.technologiesUsed}
              handleCheck={this.handleCheck}
              values={values}
            />
            <WorkField
              values={values}
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <ConfirmForm
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            technologiesUsed={this.state.technologiesUsed}
          />
        );
      case 4:
        return (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Application Form submitted, {this.state.firstName}!</h1>
            <p>
              Thank you for applying for the position. You will receive an email
              for further instructions. Good Luck!{" "}
            </p>
          </div>
        );
      default:
        return <h1>Copyright Me-ann 2019 </h1>;
    }
  }
}

export default UserForm;
