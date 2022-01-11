import React, { useState, useEffect } from "react";
import "../TableContentTherapists/TableContentTherapists.css";
import Axios from "axios";

function TableContentTherapists() {
  const [therapistName, setTherapistName] = useState("");
  const [fromThrapistSchedule, setFromThrapistSchedule] = useState("");
  const [toThrapistSchedule, setToThrapistSchedule] = useState("");
  const [therapistList, setTherapistList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/apith/get").then((response) => {
      setTherapistList(response.data);
    });
  }, []);

  const submitSchedule = () => {
    Axios.post("http://localhost:3002/apith/insert", {
      therapistName: therapistName,
      fromThrapistSchedule: fromThrapistSchedule,
      toThrapistSchedule: toThrapistSchedule,
    });
    setTherapistList([...therapistList], {
      therapistName: therapistName,
      fromThrapistSchedule: fromThrapistSchedule,
      toThrapistSchedule: toThrapistSchedule,
    });
    window.location.reload();
  };

  const deleteTherapist = (therapistId) => {
    Axios.delete(`http://localhost:3002/apith/delete/${therapistId}`);
    window.location.reload();
  };

  const updateName = (therapistId) => {
    var therapistName = document.getElementById(
      "updateInputName-" + therapistId
    ).value;

    var therapistFromAux = document.getElementById(
      "updateInputFrom-" + therapistId
    ).valueAsDate;
    var therapistFrom =
      therapistFromAux.getHours() + ":" + therapistFromAux.getMinutes() + ":00";

    var therapistToAux = document.getElementById(
      "updateInputTo-" + therapistId
    ).valueAsDate;
    var therapistTo =
      therapistToAux.getHours() + ":" + therapistToAux.getMinutes() + ":00";

    Axios.put("http://localhost:3002/apith/update", {
      therapistId: therapistId,
      therapistName: therapistName,
      therapistFrom: therapistFrom,
      therapistTo: therapistTo,
    });
    window.location.reload();
  };

  return (
    <div className='formData'>
      <form className='form'>
        <h1>Add new therapist data</h1>
        <label className='form-label'>Therapist name:</label>
        <input
          type='text'
          name='therapistName'
          onChange={(e) => {
            setTherapistName(e.target.value);
          }}
        />
        <label className='form-label'>From:</label>
        <input
          type='time'
          name='fromThrapistSchedule'
          min='08:00'
          max='20:00'
          required
          onChange={(e) => {
            setFromThrapistSchedule(e.target.value);
          }}
        />
        <label className='form-label'>To:</label>
        <input
          type='time'
          name='toThrapistSchedule'
          min='08:00'
          max='20:00'
          required
          onChange={(e) => {
            setToThrapistSchedule(e.target.value);
          }}
        />
        <button className='inputBtn' onClick={submitSchedule}>
          <i className='fas fa-user-plus'></i>
          Add new therapist
        </button>
      </form>

      <hr></hr>
      <h1>Therapists data</h1>
      {therapistList.map((val) => {
        return (
          <div className='therapistsData' key={val.id_t}>
            <li className='listData'>
              Id: {val.id_t} | Therapist Name: {val.name_t} | From:
              {val.start_time_t} | To: {val.end_time_t}{" "}
              <button
                className='deleteBtn'
                onClick={() => {
                  deleteTherapist(val.id_t);
                }}
              >
                <i className='fas fa-trash-alt'></i>
                Delete
              </button>
              <br></br>
              <label>
                Therapist name:
                <input
                  placeholder='Enter new name'
                  type='text'
                  id={`updateInputName-${val.id_t}`}
                ></input>
              </label>
              <label>
                From:
                <input type='time' id={`updateInputFrom-${val.id_t}`}></input>
              </label>
              <label>
                To:
                <input type='time' id={`updateInputTo-${val.id_t}`}></input>
              </label>
              <button
                className='updateBtn'
                onClick={() => {
                  updateName(val.id_t);
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

export default TableContentTherapists;
