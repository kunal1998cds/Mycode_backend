const express = require("express")
const cors =require("cors")
const fileupload =require("express-fileupload")
const {connected}=require("./config/db")
const { StudentRouter } = require("./routes/student.routes")
require("dotenv").config()

const app=express()
const port=80
app.use(
    cors({
      origin: "*",
    })
  );

  app.use(
    fileupload({
      useTempFiles: true,
    })
  );

  app.use(express.json());

  app.use("/students",StudentRouter)
  app.listen(port, async () => {
    try {
      await connected;
      console.log("Connected to db");
    } catch (error) {
      console.log(error);
      console.log("Connection field to db");
    }
    console.log(`running at ${port}`);
  });