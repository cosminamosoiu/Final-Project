import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TableContentTherapists from "./components/TableContentTherapists/TableContentTherapists";
import Appointments from "./components/AppointmentsTable/Appointments";
import Patients from "./components/PatientsTable/Patients";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='content-wrap'>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Switch>
              <Route path='/appointments'>
                <Appointments />
              </Route>
              <Route path='/therapists'>
                <TableContentTherapists />
              </Route>
              <Route path='/patients'>
                <Patients />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
