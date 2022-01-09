import React, { Component, useState, useEffect } from "react";
import "./TableContentTherapists.css";
import Axios from "axios";

function TableContentTherapists() {
  const [therapistName, setTherapistName] = useState("");
  const [fromThrapistSchedule, setFromThrapistSchedule] = useState("");
  const [toThrapistSchedule, setToThrapistSchedule] = useState("");
  const [therapistList, setTherapistList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((response) => {
      setTherapistList(response.data);
    });
  });

  const submitSchedule = () => {
    Axios.post("http://localhost:3002/api/insert", {
      therapistName: therapistName,
      fromThrapistSchedule: fromThrapistSchedule,
      toThrapistSchedule: toThrapistSchedule,
    }); //.then(() => {
    setTherapistList([...therapistList], {
      therapistName: therapistName,
      fromThrapistSchedule: fromThrapistSchedule,
      toThrapistSchedule: toThrapistSchedule,
    });
    //});
  };

  const deleteTherapist = (therapistId) => {
    Axios.delete(`http://localhost:3002/api/delete/${therapistId}`);
  };

  return (
    <div className='form'>
      <label>Therapist name:</label>
      <input
        type='text'
        name='therapistName'
        onChange={(e) => {
          setTherapistName(e.target.value);
        }}
      />
      <label>From:</label>
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
      <label>To:</label>
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
      <button onClick={submitSchedule}>Submit</button>

      {therapistList.map((val) => {
        return (
          <div className='card' key={val.id_t}>
            <h1>
              Id: {val.id_t} | Therapist Name: {val.name_t} | From:
              {val.start_time_t} | To: {val.end_time_t}{" "}
            </h1>
            <button
              onClick={() => {
                deleteTherapist(val.id_t);
              }}
            >
              Delete
            </button>
            <input type='text'></input>
            <button>Update</button>
          </div>
        );
      })}
    </div>
  );
}

export default TableContentTherapists;
