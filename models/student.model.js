const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    secondname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    mothername: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    subcast: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    birthplace: {
      type: String,
      required: false,
    },
    dateofbirth: {
      type: Number,
      required: false,
    },
    nameofpreviousschool: {
      type: String,
      required: false,
    },
    dateofpreviousschool: {
      type: Number,
      required: false,
    },
    natiolnallity: {
      type: String,
      required: false,
    },
    admittedinclass: {
      type: String,
      required: false,
    },
    progress: {
      type: String,
      required: false,
    },
    conduct: {
      type: String,
      required: false,
    },
    dateofschoolleving: {
      type: String,
      required: false,
    },
    remark: {
      type: String,
      required: false,
    },
    reasonofschoolleavingdues: {
      type: String,
      required: false,
    },
    adharno: {
      type: Number,
      required: false,
    },
    studentid: {
      type: Number,
      required: false,
    },
  });
  
  const Studentmodel = mongoose.model("student", StudentSchema);
  
  module.exports = { Studentmodel };