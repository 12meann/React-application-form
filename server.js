const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Form = require("./model/Form");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
  console.log("Mongodb connected");
});

app.post("/", (req, res) => {
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
    githubAccount,
    isCertify
  } = req.body;

  //validate if all fields are not empty
  if (
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !email ||
    !location ||
    !age ||
    !education ||
    !occupation ||
    !workBio ||
    !technologiesUsed ||
    !others ||
    !website ||
    !availability ||
    !githubAccount
  ) {
    return res.status(400).json({
      msg: "You must enter all fields to continue."
    });
  }
  // if (
  //   firstName.trim() ||
  //   lastName.trim() ||
  //   phoneNumber.trim() ||
  //   email.trim() ||
  //   location.trim() ||
  //   age.trim() ||
  //   education.trim() ||
  //   occupation.trim() ||
  //   workBio.trim() ||
  //   technologiesUsed.trim() ||
  //   others.trim() ||
  //   website.trim() ||
  //   availability.trim() ||
  //   githubAccount === ""
  // ) {
  //   return res.status(400).json({
  //     msg: "All fields must not be empty."
  //   });
  // }

  if (isCertify === false) {
    return res.status(400).json({
      msg:
        "You must click the checkbox to certify that all information is true to continue."
    });
  }
  //check if already apply using email
  Form.findOne({ email: email }).then(oldApplicant => {
    if (oldApplicant) {
      res.status(400).json({
        msg:
          "You already applied using that email address! Check your email for further instructions. Thank you."
      });
    } else {
      const newForm = new Form({
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
        githubAccount,
        isCertify
      });

      newForm
        .save()
        .then(() => {
          res.json(newForm);
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
});

// serve static assets if in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
