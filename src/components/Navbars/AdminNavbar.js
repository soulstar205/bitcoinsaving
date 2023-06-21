import React, { useContext } from 'react';
import jwt from 'jsonwebtoken';
import Popup from "reactjs-popup";

import '../Modals/style.css'
import './styles.css'

//Import components and modals
import Logout from "../../components/Modals/logout";
import Messages from '../../components/Modals/messages';
// import UserDropdown from "../../components/Dropdowns/UserDropdown.js";
import { UserContext } from '../../state/userContext';



export default function Navbar() { 
  const {user} = useContext(UserContext)

  console.log(user)
  

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
      <nav className="nav-container">
        <div className="nav-inner">
          {/* Brand */}
          <div className='nav-left'>
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
        
          <div className="nav-right md\:px-10">
            <div className="flex ">
              <h5 className="px-2 text-white text-capitalize">{username}</h5>
            </div>

            <div className="nav-msg" > 
            <i class="fa fa-envelope mr-2"></i>
                  <Popup
                        trigger={
                          
                            <span>{user.messages && user.messages.length}</span>
                          
                        }
                        contentStyle={{
                            width: "200px",
                            height: "fit-content",
                            background: "whitesmoke",
                        }} 
                        position="bottom center"
                        >
                        <div>
                            <div className="tip-content">
                                <Messages prop={user.messages}/>
                            </div>
                    </div>
                </Popup>
            </div>
            
            <div  
            className="nav-user" >

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
