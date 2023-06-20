import React, { useContext } from 'react';
import jwt from 'jsonwebtoken';
import Popup from "reactjs-popup";

import '../Modals/style.css'


//Import components and modals
import Logout from "../../components/Modals/logout";
import Messages from '../../components/Modals/messages';
// import UserDropdown from "../../components/Dropdowns/UserDropdown.js";
import { UserContext } from '../../state/userContext';

// const data = [
//   { id: 1, title: 'Item 1' },
//   { id: 2, title: 'Item 2' },
//   { id: 3, title: 'Item 3' },
//   { id: 4, title: 'Item 4' }
// ];

export default function Navbar() { 
  const {user} = useContext(UserContext)

  

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
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap md:px-10 px-4">
          {/* Brand */}
          <div className='relative w-auto pl-4 flex-row justify-between items-center  md:flex'>
            <a
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Dashboard
            </a>
          </div>
          {/* Form */}
          
          {/* User */}
          
          <div className="relative w-auto pl-4 flex-row justify-between items-center  md:flex">
            <div className="flex ">
              <h5 className="px-2 text-white text-capitalize">{username}</h5>
            </div>

            <div class="text-center d-md-block d-none flex-row item-center justify-between bg-green rounded text-white btn mr-2" style={{borderRadius: "5px"}}> 
            <i class="fa fa-envelope mr-2"></i>
                  <Popup
                        trigger={
                          
                            <span>{''}</span>
                          
                        }
                        contentStyle={{
                            width: "200px",
                            height: "fit-content",
                            background: "whitesmoke",
                            borderRadius: "5px",
                        }} 
                        position="bottom center"
                        >
                        <div>
                            <div className="tip-content">
                                <Messages prop={user}/>
                            </div>
                    </div>
                </Popup>
            </div>
            
            <div  
            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full my-anchor-element" >

                <Popup
                        trigger={
                          <i className="fas fa-user text-light"></i>
                        }
                        contentStyle={{
                            width: "100px",
                            height: "fit-content",
                            background: "whitesmoke",
                            borderRadius: "5px",
                        }} 
                        position="bottom center"
                        >
                        <div>
                            <div className="tip-content">
                                <Logout/>
                            </div>
                    </div>
                </Popup>
            </div>
             
          </div>
        </div>
      
        
      </nav>
      {/* End Navbar */}
    </>
  );
}
