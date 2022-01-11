import React, { useState, useEffect } from "react";
import "../PatientsTable/Patients.css";
import Axios from "axios";

function Patients() {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientDiagnosis, setPatientDiagnosis] = useState("");
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/apipa/get").then((response) => {
      setPatientList(response.data);
    });
  }, []);

  const submitPatient = () => {
    Axios.post("http://localhost:3002/apipa/insert", {
      patientName: patientName,
      patientPhone: patientPhone,
      patientEmail: patientEmail,
      patientDiagnosis: patientDiagnosis,
    });
    setPatientList([...patientList], {
      patientName: patientName,
      patientPhone: patientPhone,
      patientEmail: patientEmail,
      patientDiagnosis: patientDiagnosis,
    });
    window.location.reload();
  };

  const deletePatient = (patientId) => {
    Axios.delete(`http://localhost:3002/apipa/delete/${patientId}`);
    window.location.reload();
  };

  const updateName = (patientId) => {
    var patientName = document.getElementById(
      "updateInputName-" + patientId
    ).value;

    var patientPhone = document.getElementById(
      "updateInputPhone-" + patientId
    ).value;

    var patientEmail = document.getElementById(
      "updateInputEmail-" + patientId
    ).value;

    var patientDiagnosis = document.getElementById(
      "updateInputDiagnosis-" + patientId
    ).value;

    Axios.put("http://localhost:3002/apipa/update", {
      patientId: patientId,
      patientName: patientName,
      patientPhone: patientPhone,
      patientEmail: patientEmail,
      patientDiagnosis: patientDiagnosis,
    });
    window.location.reload();
  };

  return (
    <div className='formData'>
      <form className='form'>
        <h1>Add new patient data</h1>
        <label className='form-label'>Patient name:</label>
        <input
          type='text'
          name='patientName'
          onChange={(e) => {
            setPatientName(e.target.value);
          }}
        />

        <label className='form-label'>Patient phone-number:</label>
        <input
          type='text'
          name='patientPhone'
          onChange={(e) => {
            setPatientPhone(e.target.value);
          }}
        />

        <label className='form-label'>Patient email:</label>
        <input
          type='text'
          name='patientEmail'
          onChange={(e) => {
            setPatientEmail(e.target.value);
          }}
        />

        <label className='form-label'>Patient diagnosis:</label>
        <input
          type='text'
          name='patientDiagnosis'
          onChange={(e) => {
            setPatientDiagnosis(e.target.value);
          }}
        />

        <button className='inputBtn' onClick={submitPatient}>
          <i className='fas fa-user-plus'></i>
          Add new patient
        </button>
      </form>
      <hr></hr>
      <h1>Patients data</h1>
      {patientList.map((val) => {
        return (
          <div className='patientData' key={val.id_pa}>
            <li className='listData'>
              Id: {val.id_pa} | Patient Name: {val.name_pa} | Phone:
              {val.phone_pa} | Email:{val.email_pa} | Diagnosis:{" "}
              {val.diagnosis_pa}{" "}
              <button
                className='deleteBtn'
                onClick={() => {
                  deletePatient(val.id_pa);
                }}
              >
                <i className='fas fa-trash-alt'></i>
                Delete
              </button>
              <br></br>
              <label>
                Patient name:
                <input
                  placeholder='Enter new name'
                  type='text'
                  id={`updateInputName-${val.id_pa}`}
                ></input>
              </label>
              <label>
                Patient phone-number:
                <input
                  placeholder='Enter new phone-number'
                  type='text'
                  id={`updateInputPhone-${val.id_pa}`}
                ></input>
              </label>
              <label>
                Patient email:
                <input
                  placeholder='Enter new email'
                  type='text'
                  id={`updateInputEmail-${val.id_pa}`}
                ></input>
              </label>
              <label>
                Patient diagnosis:
                <input
                  placeholder='Enter new diagnosis'
                  type='text'
                  id={`updateInputDiagnosis-${val.id_pa}`}
                ></input>
              </label>
              <button
                className='updateBtn'
                onClick={() => {
                  updateName(val.id_pa);
                }}
              >
                <i className='fas fa-pencil-alt'></i>
                Update
              </button>
            </li>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default Patients;
