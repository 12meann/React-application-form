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
    marginTop: "20px",
    "& input": {
      padding: "10px"
    }
  },
  button: {
    margin: 10,
    marginTop: "20px",
    float: "right"
  }
});

class WorkField extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { classes, values, handleChange } = this.props;
    return (
      <div>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Enter Education / Work Details
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid>
          <Grid item xs={12} className={classes.form} sm={6}>
            <form>
              <TextField
                name="others"
                type="text"
                label="Other Technologies that you use that was not mentioned."
                onChange={handleChange("others")}
                defaultValue={values.others}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="occupation"
                type="text"
                label="Occupation (Write N.A., if none.)"
                onChange={handleChange("occupation")}
                defaultValue={values.occupation}
                fullWidth
                className={classes.field}
                required
              />

              <TextField
                name="workBio"
                type="text"
                label="Describe your work responsibilities"
                onChange={handleChange("workBio")}
                defaultValue={values.workBio}
                fullWidth
                multiline={true}
                className={classes.field}
              />
              <TextField
                name="website"
                type="text"
                label="Your portfolio website"
                onChange={handleChange("website")}
                defaultValue={values.website}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="availability"
                type="text"
                label="When are you available?"
                onChange={handleChange("availability")}
                defaultValue={values.availability}
                fullWidth
                className={classes.field}
                required
              />
              <TextField
                name="githubAccount"
                type="text"
                label="Enter your Github account. Write N.A. if none."
                onChange={handleChange("githubAccount")}
                defaultValue={values.githubAccount}
                fullWidth
                className={classes.field}
                required
              />
              <div className={classes.button}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.continue}
                  className={classes.button}>
                  Continue
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.back}
                  className={classes.button}>
                  Back
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(WorkField);
