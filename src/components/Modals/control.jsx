import React, { useState } from 'react';
import axios from 'axios';

const DepositWithdraw = ({ user }) => {
  const [values, setValues] = useState({
    amount: '',
    type: '',
    t_type: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a server call based on the selected option
    if (values.t_type === 'Credit') {
      depositUser(values);
    } else if (values.t_type === 'Debit') {
      withdrawUser(values);
    }
  };

  // Function to deposit user account
  const depositUser = async (data) => {
    try {
      // Make a POST request to your deposit endpoint
      const response = await axios.post('/api/deposit', data);

      // Handle the response from the server
      // Display a success message or update the user's account balance
    } catch (error) {
      // Handle error response
      // Display an error message or show a notification
    }
  };

  // Function to withdraw user account
  const withdrawUser = async (data) => {
    try {
      // Make a POST request to your withdrawal endpoint
      const response = await axios.post('/api/withdraw', data);

      // Handle the response from the server
      // Display a success message or update the user's account balance
    } catch (error) {
      // Handle error response
      // Display an error message or show a notification
    }
  };

  return (
    <div className="modal-content">
      <div className="modal-header bg-light">
        <h4 className="modal-title text-dark">{`Credit/Debit ${user.name} account.`}</h4>
        <button type="button" className="close text-dark" data-dismiss="modal">×</button>
      </div>
      <div className="modal-body bg-light">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control bg-light text-dark"
              placeholder="Enter amount"
              type="text"
              name="amount"
              value={values.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <h5 className="text-dark mb-2">Select where to Credit/Debit</h5>
            <select
              className="form-control bg-light text-dark"
              name="type"
              value={values.type}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Column</option>
              <option value="Bonus">Bonus</option>
              <option value="Profit">Profit</option>
              <option value="Ref_Bonus">Ref_Bonus</option>
              <option value="balance">Account Balance</option>
              <option value="Deposit">Deposit</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <h5 className="text-dark mb-2">Select credit to add, debit to subtract.</h5>
            <select
              className="form-control bg-light text-dark"
              name="t_type"
              value={values.t_type}
              onChange={handleChange}
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
