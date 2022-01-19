import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TableContentTherapists from "./components/TableContentTherapists/TableContentTherapists";
import Appointments from "./components/AppointmentsTable/Appointments";
import Patients from "./components/PatientsTable/Patients";
import Services from "./components/ServicesGalery/Services";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route exact path='/appointments' component={Appointments} />

          <Route exact path='/therapists' component={TableContentTherapists} />

          <Route exact path='/patients' component={Patients} />

          <Route exact path='/services' component={Services} />

          <Route path='/' component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
