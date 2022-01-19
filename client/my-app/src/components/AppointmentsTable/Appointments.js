import React, { useState, useEffect } from "react";
import "../AppointmentsTable/Appointments.css";
import Axios from "axios";

function Appointments() {
  const [therapistId, setTherapistId] = useState("");
  const [patientId, setpatientId] = useState("");
  const [dateApp, setDateApp] = useState("");
  const [obsApp, setobsApp] = useState("");
  const [appList, setAppList] = useState([]);
  const [therapistsList, setTherapistsList] = useState([]);
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/apiapp/get").then((response) => {
      setAppList(response.data);
    });
    Axios.get("http://localhost:3002/apiapp/getTher").then((response) => {
      setTherapistsList(response.data);
      if (response.data[0]) setTherapistId(response.data[0].id_t);
    });
    Axios.get("http://localhost:3002/apiapp/getPat").then((response) => {
      setPatientsList(response.data);
      if (response.data[0]) setpatientId(response.data[0].id_pa);
    });
  }, []);

  const submitApp = () => {
    Axios.post("http://localhost:3002/apiapp/insert", {
      therapistId: therapistId,
      patientId: patientId,
      dateApp: dateApp,
      obsApp: obsApp,
    });

    setAppList([...appList], {
      therapistId: therapistId,
      patientId: patientId,
      dateApp: dateApp,
      obsApp: obsApp,
    });
    window.location.reload();
  };

  const deleteApp = (appId) => {
    Axios.delete(`http://localhost:3002/apiapp/delete/${appId}`);
    window.location.reload();
  };

  return (
    <div className='appointmentsData'>
      <h2 className='appointmentsHeading'>
        <i className='fas fa-calendar-check'></i> Add new appointment data
      </h2>
      <form className='appointmentsForm'>
        <label className='appointmentsFormLabel'>
          {" "}
          <i className='fas fa-user-md'></i>Select the therapist:
        </label>
        <select
          className='appointmentsFormSelect'
          name='therapistId'
          onChange={(e) => {
            setTherapistId(e.target.value);
          }}
        >
          {therapistsList.map((val) => {
            return (
              <option value={val.id_t} key={val.id_t}>
                {" "}
                {val.name_t}{" "}
              </option>
            );
          })}
        </select>
        <label className='appointmentsFormLabel'>
          <i className='fas fa-user'></i>Select the patient:
        </label>
        <select
          className='appointmentsFormSelect'
          name='patientId'
          onChange={(e) => {
            setpatientId(e.target.value);
          }}
        >
          {patientsList.map((val) => {
            return (
              <option value={val.id_pa} key={val.id_pa}>
                {" "}
                {val.name_pa}{" "}
              </option>
            );
          })}
        </select>
        <label className='appointmentsFormLabel'>
          <i className='fas fa-calendar-day'></i>Select date:
        </label>
        <input
          className='appointmentsFormInput'
          name='dateApp'
          type='date'
          min='2022-01-01'
          max='2023-01-01'
          onChange={(e) => {
            setDateApp(e.target.value);
          }}
        />
        <label className='appointmentsFormLabel'>
          {" "}
          <i className='fas fa-notes-medical'></i>Add observation:
        </label>
        <input
          className='appointmentsFormInput'
          name='obsApp'
          type='text'
          onChange={(e) => {
            setobsApp(e.target.value);
          }}
        />
        <button className='submitAppointmentBtn' onClick={submitApp}>
          <i className='fas fa-calendar-check'></i>
          Add new appointment
        </button>
      </form>
      <hr></hr>
      <h2 className='appointmentsHeading'>
        <i className='fas fa-clipboard-list'></i> Appointments data
      </h2>
      ;
      {appList.map((val) => {
        return (
          <div className='appointmentsListData' key={val.id_app}>
            <ul className='appointmentsList'>
              <li className='appointmentsListItem'>
                {" "}
                <i className='fas fa-arrow-alt-circle-right'></i>
                Id: {val.id_app}
              </li>{" "}
              <li className='appointmentsListItem'>
                {" "}
                <i className='fas fa-user-md'></i>
                Therapist: {val.therapist_name}
              </li>
              <li className='appointmentsListItem'>
                <i className='fas fa-user'></i>Patient:
                {val.patient_name}
              </li>
              <li className='appointmentsListItem'>
                <i className='fas fa-calendar-day'></i>
                Date:{val.date_time_app.slice(0, 10)}{" "}
              </li>{" "}
              <li className='appointmentsListItem'>
                <i className='fas fa-notes-medical'></i>
                Observations: {val.observations_app}{" "}
              </li>
              <button
                className='appointmentsDeleteBtn'
                onClick={() => {
                  deleteApp(val.id_app);
                }}
              >
                <i className='fas fa-trash-alt'></i>
                Delete
              </button>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Appointments;
