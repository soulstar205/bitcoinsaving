import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import './style.css'

// components

const LoginAs = ({user}) => {
  const [values, setValues] = useState({});


  return (

    <div class="modal-content">
        <div class="modal-header bg-light">
        <h4 class="modal-title text-dark">{`You are about to log in as ${user}.`}</h4>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
            <button className="btn btn-success">Proceed</button>
        </div>
    </div>
  
  );
};

export default LoginAs;