import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../state/userContext";
import { useHistory, useLocation } from 'react-router-dom';
import './style.css'

// components

const DeleteUser = ({user}) => {
  const {url} = useContext(UserContext)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()
  const location = useLocation();



  const userId = user._id
  const deleteUser = () => {
    axios
      .delete(`${url}/control/delete/${userId}`)
      .then((remove) => {
        const data = console.log(remove.data);
        setSuccess('User successfully deleted');
        history.push('/userlist');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  
  return (

    <div class="modal-content">
        <div class="modal-header bg-light">
        <h4 class="modal-title text-dark">{`You are about to delete ${user.name}. completely`}</h4>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
          <div>
        {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
                         <strong> {success} </strong>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 
                    {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                         <strong> {error} </strong>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 
          </div>
              <div className="form-group">
                <form onSubmit={deleteUser}>

                  <button className="btn btn-warning" type="submit" >Proceed</button>
                </form>
              </div>
        </div>
    </div>
  
  );
};

export default DeleteUser;