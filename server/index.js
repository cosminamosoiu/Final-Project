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
  timezone: "utc",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--------------------THERAPISTs----------------------------------------------
app.get("/apith/get", (req, res) => {
  const sqlSelect = "SELECT * FROM therapists";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/apith/insert", (req, res) => {
  const therapistName = req.body.therapistName;
  const fromThrapistSchedule = req.body.fromThrapistSchedule;
  const toThrapistSchedule = req.body.toThrapistSchedule;

  const sqlInsert =
    "INSERT INTO therapists (name_t, start_time_t, end_time_t) VALUES (?,?,?)";
  db.query(
    sqlInsert,
    [therapistName, fromThrapistSchedule, toThrapistSchedule],
    (err, result) => {
      //console.log(result);
    }
  );
});

app.delete("/apith/delete/:therapistId", (req, res) => {
  const id = req.params.therapistId;
  const sqlDelete = "DELETE FROM therapists WHERE id_t = ?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/apith/update", (req, res) => {
  const id = req.body.therapistId;
  const name = req.body.therapistName;
  const from = req.body.therapistFrom;
  const to = req.body.therapistTo;
  const sqlUpdate =
    "UPDATE therapists SET name_t=?, start_time_t=?, end_time_t=? WHERE id_t=?";

  db.query(sqlUpdate, [name, from, to, id], (err, result) => {
    if (err) console.log(err);
  });
}),
  //--------------------end THERAPISTs----------------------------------------------

  //--------------------PATIENTS--------------------------------------------------
  app.get("/apipa/get", (req, res) => {
    const sqlSelect = "SELECT * FROM patients";
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });

app.post("/apipa/insert", (req, res) => {
  const patientName = req.body.patientName;
  const patientPhone = req.body.patientPhone;
  const patientEmail = req.body.patientEmail;
  const patientDiagnosis = req.body.patientDiagnosis;

  const sqlInsert =
    "INSERT INTO patients (name_pa, phone_pa, email_pa, diagnosis_pa) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [patientName, patientPhone, patientEmail, patientDiagnosis],
    (err, result) => {
      //console.log(result);
    }
  );
});

app.delete("/apipa/delete/:patientId", (req, res) => {
  const id = req.params.patientId;
  const sqlDelete = "DELETE FROM patients WHERE id_pa = ?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.put("/apipa/update", (req, res) => {
  const id = req.body.patientId;
  const name = req.body.patientName;
  const phone = req.body.patientPhone;
  const email = req.body.patientEmail;
  const diagnosis = req.body.patientDiagnosis;
  const sqlUpdate =
    "UPDATE patients SET name_pa=?, phone_pa=?, email_pa=?, diagnosis_pa=? WHERE id_pa=?";

  db.query(sqlUpdate, [name, phone, email, diagnosis, id], (err, result) => {
    if (err) console.log(err);
  });
}),
  //--------------------end PATIENTS------------------------------------------------

  //--------------------APPOINTMENTS------------------------------------------------
  app.get("/apiapp/get", (req, res) => {
    const sqlSelect = `SELECT appointments_pa.id_app, appointments_pa.id_ter_app, 
      appointments_pa.id_pat_app, appointments_pa.date_time_app, appointments_pa.observations_app, 
      patients.name_pa as patient_name, therapists.name_t as therapist_name FROM appointments_pa 
      INNER JOIN patients on appointments_pa.id_pat_app=patients.id_pa
      INNER JOIN therapists on appointments_pa.id_ter_app=therapists.id_t`;
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });

app.get("/apiapp/getPat", (req, res) => {
  const sqlSelect = "SELECT * FROM patients";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/apiapp/getTher", (req, res) => {
  const sqlSelect = "SELECT * FROM therapists";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/apiapp/insert", (req, res) => {
  const therapistId = req.body.therapistId;
  const patientId = req.body.patientId;
  const dateApp = req.body.dateApp;
  const obsApp = req.body.obsApp;

  const sqlInsert =
    "INSERT INTO appointments_pa (id_ter_app, id_pat_app, date_time_app, observations_app) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [therapistId, patientId, dateApp, obsApp],
    (err, result) => {
      //console.log(result);
    }
  );
});

app.delete("/apiapp/delete/:appId", (req, res) => {
  const id = req.params.appId;
  const sqlDelete = "DELETE FROM appointments_pa WHERE id_app = ?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err);
  });
});

//--------------------END APPOINTMENTS----------------------------------------------

app.listen(3002, () => {
  console.log("Running on port 3002");
});
