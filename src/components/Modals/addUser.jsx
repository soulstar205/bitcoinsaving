import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import './style.css'

// components

const AddUser = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUser = async () => {
    try {
      const user = {
        name,
        username,
        password,
        email,
      };
  
      const response = await axios.post('http://localhost:3001/api/register', { ...user });
      console.log(response.status);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div class="modal-content">
        <div class="modal-header bg-light">
        <h4 class="modal-title text-dark">Add a new user</h4>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
            <div>
                <form method="POST" onSubmit={createUser}>
                    <input type="hidden" name="_token" value=""/>													
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <h6 class="text-dark">Username</h6>
                            <input type="text" id="input1" value={username} onChange={(e)=> setUsername(e.target.value)} class="form-control bg-light text-dark" name="username" required=""/>
                        </div>
                        <div class="form-group col-md-12">
                            <h6 class="text-dark">Fullname</h6>
                            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} class="form-control bg-light text-dark" name="name" required=""/>
                        </div>
                        <div class="form-group col-md-12">
                            <h6 class="text-dark">Email</h6>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} class="form-control bg-light text-dark" name="email" required=""/>
                        </div>
                        <div class="form-group col-md-12">
                            <h6 class="text-dark">Password</h6>
                            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="form-control bg-light text-dark" name="password" required=""/>
                        </div>
                        
                    </div>
                    <button type="submit" class="px-4 btn btn-primary">Add User</button>
                </form>  
            </div>
            
        </div>
    </div>
  
  );
};

export default AddUser;