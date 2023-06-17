import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import './style.css'

// components

const DeleteUser = ({user}) => {
  const [values, setValues] = useState({});


  return (

    <div class="modal-content">
        <div class="modal-header bg-light">
        <h4 class="modal-title text-dark">{`You are about to delete ${user}. completely`}</h4>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
            <button className="btn btn-warning">Proceed</button>
        </div>
    </div>
  
  );
};

export default DeleteUser;