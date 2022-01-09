import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import TableContentTherapists from './components/TableContentTherapists/TableContentTherapists'

function App() {
  return (
    <div className="App">
      <Navbar />
      <TableContentTherapists/>  
    </div>
  );
}

export default App;
