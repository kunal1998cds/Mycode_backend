const express = require("express");
const StudentRouter = express.Router();

const { Studentmodel } = require("../models/student.model");
const { converter } = require("../middlewares/Imageconverter");

StudentRouter.get("/", async (req, res) => {
  try {
    const students = await Studentmodel.find();
    res.send(students);
  } catch (error) {
    res.send(error);
  }
});

StudentRouter.post("/add", converter, async (req, res) => {
  try {
    const new_student = new Studentmodel({
      firstname: req.body.firstname,
      secondname: req.body.secondname,
      lastname: req.body.lastname,
      mothername: req.body.mothername,
      cast: req.body.cast,
      subcast: req.body.subcast,
      image: req.body.image,
      birthplace: req.body.birthplace,
      dateofbirth: req.body.dateofbirth,
      nameofpreviousschool: req.body.nameofpreviousschool,
      dateofpreviousschool: req.body.dateofpreviousschool,
      natiolnallity: req.body. natiolnallity,
      admittedinclass: req.body. admittedinclass,
      progress: req.body.  progress,
      conduct: req.body.  conduct,
      dateofschoolleving: req.body.  dateofschoolleving,
      remark: req.body.  remark,
      reasonofschoolleavingdues: req.body. reasonofschoolleavingdues,
      adharno: req.body. adharno,
      studentid: req.body. studentid,
    });
    await new_student.save();
    res.status(200).json({ msg: "uploaded student data sucessfully" });
  } catch (error) {
    res.send(error);
  }
});
StudentRouter.put("/update/:id",  async (req, res) => {
  try {
    const payload = req.body;
    const update = req.params.id;

    // Update the student record without checking authorization
    const updatedStudent = await Studentmodel.findByIdAndUpdate(update, payload);

    if (!updatedStudent) {
      return res.status(404).send({ msg: "Student not found" });
    }

    res.send(`Updated the data of student ID ${update}`);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});


StudentRouter.delete("/delete/:id", async (req, res) => {
  const update = req.params.id;

  try {
    const student = await Studentmodel.findById(update);

    if (!student) {
      return res.status(404).send({ msg: "Student not found" });
    }

    await Studentmodel.findByIdAndDelete(update);
    res.send(`Deleted the data of student id ${update}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = {
  StudentRouter,
};
