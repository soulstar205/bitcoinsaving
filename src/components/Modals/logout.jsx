import React from 'react'
import {Link, useHistory } from 'react-router-dom'
import './style.css'


const Logout =(admin)=>{
    const history = useHistory()

    const logoutFunc =()=>{
        localStorage.clear();
        history.push('/')
    }
    return(
        <div className="log-out ">
         { admin? "" : <div className="log-content">
                <Link to="/admin/settings">
                <p>Settings</p>
                </Link>
            </div>}
            <div className="log-content" onClick={()=> logoutFunc()}>
                <p>Logout</p>
            </div>
        </div>
    )
}
export default Logout