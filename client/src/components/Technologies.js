import React, { Component } from "react";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  checkbox: {
    margin: "30px auto"
  },
  form: {
    margin: "auto",
    marginTop: "100px"
  },
  button: {
    margin: 10,
    marginTop: "20px",
    float: "right"
  },
  helperText: {
    marginBottom: "40px"
  }
});

class Technologies extends Component {
  render() {
    const { classes, handleCheck, values } = this.props;
    return (
      <Grid>
        <Grid item xs={12} className={classes.form} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              What are the technologies you work with or use?
            </FormLabel>
            <FormHelperText className={classes.helperText}>
              These maybe a programming language, library or framework. Choose
              as many as you want.
            </FormHelperText>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheck}
                    checked={values.technologiesUsed.includes("html")}
                    value="html"
                  />
                }
                label="HTML"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="css" />}
                checked={values.technologiesUsed.includes("css")}
                label="CSS"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="javascript" />}
                checked={values.technologiesUsed.includes("javascript")}
                label="Javascript"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="jquery" />}
                checked={values.technologiesUsed.includes("jquery")}
                label="Jquery"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="nodeJs" />}
                checked={values.technologiesUsed.includes("nodeJs")}
                label="Node JS"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="expressJs" />}
                checked={values.technologiesUsed.includes("expressJs")}
                label="Express JS"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="angularJs" />}
                checked={values.technologiesUsed.includes("angularJs")}
                label="Angular JS"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="reactJs" />}
                checked={values.technologiesUsed.includes("reactJs")}
                label="React JS"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="mongoDb" />}
                checked={values.technologiesUsed.includes("mongoDb")}
                label="Mongo DB"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="phyton" />}
                checked={values.technologiesUsed.includes("phyton")}
                label="Phyton"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="php" />}
                checked={values.technologiesUsed.includes("php")}
                label="Php"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="laravel" />}
                checked={values.technologiesUsed.includes("laravel")}
                label="Laravel"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="firebase" />}
                checked={values.technologiesUsed.includes("firebase")}
                label="Firebase"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="django" />}
                checked={values.technologiesUsed.includes("django")}
                label="Django"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="mysql" />}
                checked={values.technologiesUsed.includes("mysql")}
                label="MySQL"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleCheck} value="docker" />}
                checked={values.technologiesUsed.includes("docker")}
                label="Docker"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Technologies);
