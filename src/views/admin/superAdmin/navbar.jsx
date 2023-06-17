import React, {useContext} from "react";
import {UserContext} from '../../../state/userContext'

// import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  // const {user} = useContext(UserContext)
  
  return (
    <>
      {/* Navbar */}
      <nav className=" w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center py-3">
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
            <h3 className="px-2 text-white">{"Admin"}</h3>
          {/* <div class="text-center d-md-block d-none flex-row item-center justify-center bg-pink-500 px-2 text-white btn mr-2">
                <i class="fa fa-envelope"></i>
                <a href="" class="pricing-action btn-sm">Messages</a> &nbsp;
                <span>{2}</span>
            </div> */}
              <div

                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " 
                }
              >
                
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              
            </div>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
