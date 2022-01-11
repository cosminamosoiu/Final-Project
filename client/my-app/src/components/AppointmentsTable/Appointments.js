import React, { useState, useEffect } from "react";
import "../AppointmentsTable/Appointments.css";
import Axios from "axios";

function Appointments() {
  const [therapistId, setTherapistId] = useState("");
  const [patientId, setpatientId] = useState("");
  const [dateApp, setDateApp] = useState("");
  const [observationApp, setobservationApp] = useState("");
  const [appList, setAppList] = useState([]);
  const [therapistsList, setTherapistsList] = useState([]);
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/apiapp/get").then((response) => {
      setAppList(response.data);
    });
    Axios.get("http://localhost:3002/apiapp/getTher").then((response) => {
      setTherapistsList(response.data);
    });
    Axios.get("http://localhost:3002/apiapp/getPat").then((response) => {
      setPatientsList(response.data);
    });
  }, []);

  const submitApp = () => {
    Axios.post("http://localhost:3002/apiapp/insert", {
      therapistId: therapistId,
      patientId: patientId,
      dateApp: dateApp,
      observationApp: observationApp,
    });
    setAppList([...appList], {
      therapistId: therapistId,
      patientId: patientId,
      dateApp: dateApp,
      observationApp: observationApp,
    });
    window.location.reload();
  };

  const deleteApp = (appId) => {
    Axios.delete(`http://localhost:3002/apiapp/delete/${appId}`);
    window.location.reload();
  };

  return (
    <div className='formData'>
      <form className='form'>
        <h1>Add new appointment data</h1>
        <label className='form-label'>Select the therapist:</label>
        <select>
          {therapistsList.map((val) => {
            return (
              <option value={val.id_t} key={val.id_t}>
                {" "}
                {val.name_t}{" "}
              </option>
            );
          })}
        </select>
        <label className='form-label'>Select the pacient:</label>
        <select>
          {patientsList.map((val) => {
            return (
              <option value={val.id_pa} key={val.id_pa}>
                {" "}
                {val.name_pa}{" "}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}

export default Appointments;
