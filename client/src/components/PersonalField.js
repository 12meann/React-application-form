import React, { Component } from "react";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  title: {
    margin: "auto"
  },
  form: {
    margin: "auto",
    marginTop: "100px",
    "& input": {
      padding: "10px"
    }
  },
  button: {
    marginTop: "20px",
    float: "right"
  }
});

class PersonalField extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { classes, values, handleChange } = this.props;
    return (
      <div>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid>
          <Grid item xs={12} className={classes.form} sm={6}>
            <form action="">
              <TextField
                name="firstName"
                type="text"
                label="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="lastName"
                type="text"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="phoneNumber"
                type="text"
                label="Phone Number"
                onChange={handleChange("phoneNumber")}
                defaultValue={values.phoneNumber}
                fullWidth
                className={classes.field}
              />
              <TextField
                name="email"
                type="email"
                label="Email Address"
                onChange={handleChange("email")}
                defaultValue={values.email}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="location"
                type="text"
                label="Location"
                onChange={handleChange("location")}
                defaultValue={values.location}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="age"
                type="text"
                label="Age"
                onChange={handleChange("age")}
                defaultValue={values.age}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="education"
                type="text"
                label="Highest Level of Education"
                onChange={handleChange("education")}
                defaultValue={values.education}
                fullWidth
                className={classes.field}
                required
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.continue}>
                Continue
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PersonalField);
