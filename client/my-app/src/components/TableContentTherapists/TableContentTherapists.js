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

    const therapistFromAux = document.getElementById(
      "updateInputFrom-" + therapistId
    ).valueAsDate;
    const therapistFrom =
      therapistFromAux.getHours() + ":" + therapistFromAux.getMinutes() + ":00";

    const therapistToAux = document.getElementById(
      "updateInputTo-" + therapistId
    ).valueAsDate;
    const therapistTo =
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
    <div className='therapistsData'>
      <h2 className='therapistsHeading'>
        <i className='fas fa-user-plus'></i> Add new therapist data
      </h2>
      <form className='therapistsForm'>
        <label className='therapistsFormLabel'>
          {" "}
          <i className='fas fa-user-md'></i>Therapist name:
        </label>
        <input
          className='therapistsFormInput'
          type='text'
          name='therapistName'
          onChange={(e) => {
            setTherapistName(e.target.value);
          }}
        />
        <label className='therapistsFormLabel'>
          {" "}
          <i className='fas fa-clock'></i>From:
        </label>
        <input
          className='therapistsFormInput'
          type='time'
          name='fromThrapistSchedule'
          min='08:00'
          max='20:00'
          required
          onChange={(e) => {
            setFromThrapistSchedule(e.target.value);
          }}
        />
        <label className='therapistsFormLabel'>
          {" "}
          <i className='fas fa-clock'></i>To:
        </label>
        <input
          className='therapistsFormInput'
          type='time'
          name='toThrapistSchedule'
          min='08:00'
          max='20:00'
          required
          onChange={(e) => {
            setToThrapistSchedule(e.target.value);
          }}
        />
        <button className='submitTherapistBtn' onClick={submitSchedule}>
          <i className='fas fa-user-plus'></i>
          Add new therapist
        </button>
      </form>

      <hr></hr>
      <h2 className='therapistsHeading'>
        <i className='fas fa-clipboard-list'></i> Therapists data
      </h2>
      {therapistList.map((val) => {
        return (
          <div className='therapistsListData' key={val.id_t}>
            <ul className='therapistsUlList'>
              <li className='therapistListItem'>
                {" "}
                <i className='fas fa-arrow-alt-circle-right'></i>
                Id: {val.id_t}
              </li>
              <li className='therapistListItem'>
                <i className='fas fa-user-md'></i>Therapist Name: {val.name_t}{" "}
              </li>
              <li className='therapistListItem'>
                <i className='fas fa-clock'></i>
                From:
                {val.start_time_t}
              </li>{" "}
              <li className='therapistListItem'>
                <i className='fas fa-clock'></i>
                To: {val.end_time_t}{" "}
              </li>
              <button
                className='deleteTherapistBtn'
                onClick={() => {
                  deleteTherapist(val.id_t);
                }}
              >
                <i className='fas fa-trash-alt'></i>
                Delete
              </button>
              <br></br>
              <label className='therapistsListLabel'>Therapist name:</label>
              <input
                className='therapistsListInput'
                placeholder='Enter new name'
                type='text'
                id={`updateInputName-${val.id_t}`}
              ></input>
              <label className='therapistsListLabel'>From:</label>
              <input
                className='therapistsListInput'
                type='time'
                id={`updateInputFrom-${val.id_t}`}
              ></input>
              <label className='therapistsListLabel'>To:</label>
              <input
                className='therapistsListInput'
                type='time'
                id={`updateInputTo-${val.id_t}`}
              ></input>
              <button
                className='updateTherapistBtn'
                onClick={() => {
                  updateName(val.id_t);
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

export default TableContentTherapists;
