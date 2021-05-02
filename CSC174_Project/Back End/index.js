const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    user: "b88fe9380dd339",
    host: "us-cdbr-east-03.cleardb.com",
    password: "4e8b1ad8",
    database: "heroku_d3155a9032d1fb9",
});



app.post("/create", (req, res) => {
    const NAME = req.body.NAME;
    const ADDRESS = req.body.ADDRESS;
    const CITY = req.body.CITY;

    db.query(
        "INSERT INTO HOSPITAL (NAME, ADDRESS, CITY) VALUES (?,?,?)", 
        [NAME, ADDRESS, CITY], 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
       );
  });

  app.post("/createPatient", (req, res) => {
    const PID = req.body.PID;
    const FIRST_NAME = req.body.FIRST_NAME;
    const LAST_NAME= req.body.LAST_NAME;
    const SEX= req.body.SEX;
    const HOSPITAL_NAME= req.body.HOSPITAL_NAME;

    db.query(
        "INSERT INTO PATIENT (PID, FIRST_NAME, LAST_NAME, SEX, HOSPITAL_NAME) VALUES (?,?,?,?,?)", 
        [PID, FIRST_NAME, LAST_NAME, SEX, HOSPITAL_NAME], 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
       );
  });

 

  app.get("/Hospitals", (req, res) => {
    db.query("SELECT * FROM HOSPITAL", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
  });

  app.get("/Patients", (req, res) => {
    db.query("SELECT * FROM PATIENT", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
  });



app.listen(process.env.PORT || 3001, () => { 
    console.log("Server is running");
});
