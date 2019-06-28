import React, { Component } from "react";
import Message from "./Message";
import axios from "axios";
//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  title: {
    margin: "auto"
  },
  button: {
    margin: 10,
    marginTop: "20px",
    float: "right"
  },
  list: {
    margin: "auto",
    marginTop: 100
  }
});
class ConfirmForm extends Component {
  state = {
    isCertify: false,
    msg: null
  };
  handleChange = name => e => {
    this.setState({
      ...this.state,
      [name]: e.target.checked
    });
  };
  continue = e => {
    e.preventDefault();
    //backend
    const { isCertify } = this.state;
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
      website,
      availability,
      githubAccount,
      others,
      technologiesUsed
    } = this.props.values;
    const form = {
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
      technologiesUsed,
      isCertify
    };
    axios
      .post("/", form)
      .then(res => {
        this.props.nextStep();
      })
      .catch(err => {
        console.log(err.response.data.msg);
        this.setState({
          msg: err.response.data.msg
        });
      });
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { classes } = this.props;
    const {
      values: {
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
      }
    } = this.props;
    return (
      <div>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Review and Confirm Submission
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.msg && <Message msg={this.state.msg} />}
        <Grid>
          <Grid item xs={12} sm={6} className={classes.list}>
            <List>
              <ListItemText
                color="primary"
                primary="First Name : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {firstName}
                  </Typography>
                }
              />
              <ListItemText
                primary="Last Name : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {lastName}
                  </Typography>
                }
              />
              <ListItemText
                primary="Phone Number : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {phoneNumber}
                  </Typography>
                }
              />
              <ListItemText
                primary="Email : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {email}
                  </Typography>
                }
              />
              <ListItemText
                primary="Location : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {location}
                  </Typography>
                }
              />
              <ListItemText
                primary="Age : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {age}
                  </Typography>
                }
              />
              <ListItemText
                primary="Technologies Used : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {technologiesUsed.map(item => (
                      <Typography
                        component="p"
                        variant="body1"
                        key={item}
                        display="inline">
                        {item},{" "}
                      </Typography>
                    ))}
                  </Typography>
                }
              />
              <ListItemText
                primary="Other technologies that you use that was not mentioned : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {others}
                  </Typography>
                }
              />

              <ListItemText
                primary="Highest Level of Education : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {education}
                  </Typography>
                }
              />
              <ListItemText
                primary="Occupation : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {occupation}
                  </Typography>
                }
              />
              <ListItemText
                primary="Work Biography : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {workBio}
                  </Typography>
                }
              />
              <ListItemText
                primary="Portfolio Website : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {website}
                  </Typography>
                }
              />
              <ListItemText
                primary="When are ypu available? : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {availability}
                  </Typography>
                }
              />
              <ListItemText
                primary="Github account : "
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    color="secondary">
                    {githubAccount}
                  </Typography>
                }
              />
            </List>

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.isCertify}
                  value="isCertify"
                  onChange={this.handleChange("isCertify")}
                />
              }
              label="I hereby certify that the above information are true and correct to the best of my
              knowledge. I understand that a false statement may disqualify me for my application."
            />

            <div className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.continue}
                className={classes.button}
                disabled={!this.state.isCertify}>
                Submit Application Form
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={this.back}
                className={classes.button}>
                Back
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ConfirmForm);
