import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import './style.css'

// components

const History = ({user}) => {
  const [values, setValues] = useState({});


  return (

    <div class="modal-content">
        <div class="modal-header bg-light">
        <h4 class="modal-title text-dark">{`Add Trading history to ${user}'s account.`}</h4>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
        <form role="form" method="post" >
                        <input type="hidden" name="_token" />                        
                        <div class="form-group">
                            <h5 class=" text-dark">Select Investment Plan</h5>
                            <select class="form-control bg-light text-dark" name="plan">
                                <option value="" selected="" disabled="">Select Plan</option>
                                <option value="Professional">Professional</option>
                                <option value="Premium">Premium</option>
                                <option value="Starter">Starter</option>
                            </select>
                        </div>
                        <div class="form-group">
                           <h5 class=" text-dark">Amount</h5>
                            <input type="number" name="amount" class="form-control bg-light text-dark"/>
                        </div>
                        <div class="form-group">
                            <h5 class=" text-dark">Type</h5>
                            <select class="form-control bg-light text-dark" name="type">
                                <option value="" selected="" disabled="">Select type</option>
                                <option value="Bonus">Bonus</option>
                                <option value="ROI">ROI</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-dark" value="Add History"/>
                            <input type="hidden" name="user_id" value="66"/> 
                        </div>
                    </form>
        </div>
    </div>
  
  );
};

export default History;