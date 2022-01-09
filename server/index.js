const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  hostname: "localhost",
  port: "3306",
  user: "root2",
  password: "coschi",
  database: "finalprojectdatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM therapists";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const therapistName = req.body.therapistName;
  const fromThrapistSchedule = req.body.fromThrapistSchedule;
  const toThrapistSchedule = req.body.toThrapistSchedule;

  const sqlInsert =
    "INSERT INTO therapists (name_t, start_time_t, end_time_t) VALUES (?,?,?)";
  db.query(
    sqlInsert,
    [therapistName, fromThrapistSchedule, toThrapistSchedule],
    (err, result) => {
      console.log(result);
    }
  );
});

app.delete("/api/delete/:therapistId", (req, res) => {
  const id = req.params.therapistId;
  const sqlDelete = "DELETE From therapists WHERE id_t = ?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3002, () => {
  console.log("Running on port 3002");
});
