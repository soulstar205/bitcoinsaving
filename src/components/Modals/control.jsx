import React, { useState, useContext } from 'react';
import { UserContext } from '../../state/userContext';
import axios from 'axios';

const DepositWithdraw = (user) => {
  const {url} = useContext(UserContext)
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('')
  const [t_type, setT_type] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const userId = user.user._id
  console.log(userId)

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const numberValue = Number(inputValue); // Convert to number
    setAmount(numberValue);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {amount}
    // Make a server call based on the selected option
    if (t_type === 'Credit') {
      depositUser(value);
    } else if (t_type === 'Debit') {
      withdrawUser(value);
    }
  };

  // Function to deposit user account
  const depositUser = async (data) => {
    const newData = data
    try {
      // Make a POST request to your deposit endpoint
      const response = await axios.put(`${url}/control/deposit/${userId}`, newData);
      const data = response.data
      setSuccess('Deposit successful')
      // Handle the response from the server
      // Display a success message or update the user's account balance
    } catch (error) {
      console.log(error)
      setError(error.message)
      // Handle error response
      // Display an error message or show a notification
    }
  };

  // Function to withdraw user account
  const withdrawUser = async (data) => {
    const newData = data
    try {
      // Make a POST request to your withdrawal endpoint
      const response = await axios.put(`${url}/control/withdraw/${userId}`, newData);
      const data = response.data
      setSuccess('Withdrawal successful')
      // Handle the response from the server
      // Display a success message or update the user's account balance
    } catch (error) {
      console.log(error)
      setError(error.message)
      // Handle error response
      // Display an error message or show a notification
    }
  };

  

  return (
    <div className="modal-content">
      <div className="modal-header bg-light">
        <h4 className="modal-title text-dark">{`Credit/Debit ${user.user.name} account.`}</h4>
        <button type="button" className="close text-dark" data-dismiss="modal">×</button>
      </div>
       {/* This is the end of the alerts */}
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
      <div className="modal-body bg-light">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control bg-light text-dark"
              placeholder="Enter amount"
              type="text"
              name="amount"
              value={amount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <h5 className="text-dark mb-2">Select where to Credit/Debit</h5>
            <select
              className="form-control bg-light text-dark"
              name="type"
              value={type}
              onChange={(e)=> setType(e.target.value)}
              required
            >
              <option value="" disabled>Select Column</option>
              <option value="balance">Account Balance</option>
              <option value="Deposit">Deposit</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <h5 className="text-dark mb-2">Select credit to add, debit to subtract.</h5>
            <select
              className="form-control bg-light text-dark"
              name="t_type"
              value={t_type}
              onChange={(e)=> setT_type(e.target.value)}
              required
            >
              <option value="">Select type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
            <small>
              <b>NOTE:</b> You cannot debit deposit
            </small>
          </div>
          <div className="form-group">
            <input type="hidden" name="user_id" value="66" />
            <input type="submit" className="btn btn-dark" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositWithdraw;
