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
    <div className='patientsData'>
      <h2 className='patientsHeading'>
        <i className='fas fa-user-plus'></i> Add new patient data
      </h2>
      <form className='patientsForm'>
        <label className='patientsFormLabel'>
          <i className='fas fa-user'></i> Patient name:
        </label>
        <input
          className='patientsFormInput'
          type='text'
          name='patientName'
          onChange={(e) => {
            setPatientName(e.target.value);
          }}
        />

        <label className='patientsFormLabel'>
          {" "}
          <i className='fas fa-phone'></i>Patient phone-number:
        </label>
        <input
          className='patientsFormInput'
          type='text'
          name='patientPhone'
          onChange={(e) => {
            setPatientPhone(e.target.value);
          }}
        />

        <label className='patientsFormLabel'>
          {" "}
          <i className='fas fa-envelope'></i> Patient email:
        </label>
        <input
          className='patientsFormInput'
          type='text'
          name='patientEmail'
          onChange={(e) => {
            setPatientEmail(e.target.value);
          }}
        />

        <label className='patientsFormLabel'>
          {" "}
          <i className='fas fa-comment-medical'></i>Patient diagnosis:
        </label>
        <input
          className='patientsFormInput'
          type='text'
          name='patientDiagnosis'
          onChange={(e) => {
            setPatientDiagnosis(e.target.value);
          }}
        />

        <button className='submitPatientsBtn' onClick={submitPatient}>
          <i className='fas fa-user-plus'></i>
          Add new patient
        </button>
      </form>
      <hr></hr>

      <h2 className='patientsHeading'>
        <i className='fas fa-clipboard-list'></i> Patients data
      </h2>
      {patientList.map((val) => {
        return (
          <div className='patientsListData' key={val.id_pa}>
            <ul className='patientsUlData'>
              {" "}
              <li className='patientsListItem'>
                {" "}
                <i class='fas fa-arrow-alt-circle-right'></i> Id: {val.id_pa}
              </li>
              <li className='patientsListItem'>
                <i className='fas fa-user'></i> Patient Name: {val.name_pa}
              </li>
              <li className='patientsListItem'>
                <i className='fas fa-phone'></i> Phone:
                {val.phone_pa}
              </li>
              <li className='patientsListItem'>
                <i className='fas fa-envelope'></i> Email:
                {val.email_pa}
              </li>
              <li className='patientsListItem'>
                <i className='fas fa-comment-medical'></i> Diagnosis:{" "}
                {val.diagnosis_pa}{" "}
              </li>
              <button
                className='deletePatientsBtn'
                onClick={() => {
                  deletePatient(val.id_pa);
                }}
              >
                <i className='fas fa-trash-alt'></i>
                Delete
              </button>
              <br></br>
              <label className='patientsListLabel'>Patient name:</label>
              <input
                className='patientsListInput'
                placeholder='Enter new name'
                type='text'
                id={`updateInputName-${val.id_pa}`}
              ></input>
              <label className='patientsListLabel'>
                Patient phone-number:{" "}
              </label>
              <input
                className='patientsListInput'
                placeholder='Enter new phone-number'
                type='text'
                id={`updateInputPhone-${val.id_pa}`}
              ></input>
              <label className='patientsListLabel'>Patient email: </label>
              <input
                className='patientsListInput'
                placeholder='Enter new email'
                type='text'
                id={`updateInputEmail-${val.id_pa}`}
              ></input>
              <label className='patientsListLabel'>Patient diagnosis: </label>
              <input
                className='patientsListInput'
                placeholder='Enter new diagnosis'
                type='text'
                id={`updateInputDiagnosis-${val.id_pa}`}
              ></input>
              <button
                className='updatePatientsBtn'
                onClick={() => {
                  updateName(val.id_pa);
                }}
              >
                <i className='fas fa-pencil-alt'></i>
                Update
              </button>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Patients;
