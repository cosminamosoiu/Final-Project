import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* {Column1} */}
          <div className='col'>
            <h4>Contact details</h4>
            <ul className='list-unstyled'>
              <li>Number: 0732 XXX XXX</li>
              <li>Street *** </li>
              <li>Brasov, Romamnia</li>
            </ul>
          </div>
          {/* {Column 2} */}
          <div className='col'>
            <h4>About</h4>
            <ul className='list-unstyled'>
              <li>Final project</li>
              <li>CRUD</li>
              <li>Database</li>
            </ul>
          </div>
          {/* {Column 3} */}
          <div className='col'>
            <h4>Media</h4>
            <ul className='list-unstyled'>
              <li>Github</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Cosmina-Maria Mosoiu| All rights
            reserved | Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
