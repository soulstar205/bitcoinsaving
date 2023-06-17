import React, {useContext} from "react";
import {UserContext} from '../../state/userContext'
import jwt from 'jsonwebtoken';

// import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  // const {user} = useContext(UserContext)

  const decodeToken = (token) => {
    try {
      const decodedToken = jwt.decode(token);
      return decodedToken;
    } catch (error) {
      console.log('Error decoding token:', error);
      return null;
    }
  };

  const token = localStorage.getItem('token')
  const decodedToken = decodeToken(token);
  const username = decodedToken.username
  

  
  return (
    <>
      {/* Navbar */}
      <nav className=" w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
          <div className="relative w-auto pl-4 flex-row items-center md:flex">
            <h5 className="px-2 text-white text-capitalize">{username}</h5>
            <div class="text-center d-md-block d-none flex-row item-center justify-center bg-purple px-2 text-white btn mr-2" style={{borderRadius: "5px"}}>
                <i class="fa fa-envelope"></i>
                <a href="" class="pricing-action btn-sm text-decoration-none text-light">Messages</a> &nbsp;
                  <span>{2}</span>
            </div>
              <div
                className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "
               
              >
                <button className="dropdown-toggle btn" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user text-light"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><button class="dropdown-item" type="button">Action</button></li>
                  <li><button class="dropdown-item" type="button">Another action</button></li>
                  <li><button class="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
             
            </div>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
