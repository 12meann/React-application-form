const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const FormSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  technologiesUsed: {
    type: Array,
    required: true
  },
  others: {
    type: String,
    required: true
  },
  workBio: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  githubAccount: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

  isCertify: {
    type: Boolean
  }
});

const Form = mongoose.model("form", FormSchema);

module.exports = Form;
