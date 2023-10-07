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
StudentRouter.put("/update/:id", converter, async (req, res) => {
  const paylode = req.body;
  const update = req.params.id;
  const bike = await Studentmodel.findOne({ _id: update });
  const userId_in_data = bike.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Studentmodel.findByIdAndUpdate({ _id: update }, paylode);
      res.send(`updated the data of bike id ${v}`);
    }
  } catch (error) {
    res.send(error);
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
