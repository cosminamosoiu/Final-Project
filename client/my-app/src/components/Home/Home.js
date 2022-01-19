import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <div className='homePage'>
      <h1>
        Welcome to KineticSoft
        <i
          className='fas fa-running '
          style={{ fontSize: 100, marginTop: 30 }}
        ></i>
      </h1>
    </div>
  );
}
export default Home;
