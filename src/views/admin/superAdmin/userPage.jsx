import React, { useState, useEffect } from 'react'
import {useHistory, useLocation} from 'react-router-dom'


//IMport components
import DepositWidraw from '../../../components/Modals/control'
import History from '../../../components/Modals/history'
import LoginAs from '../../../components/Modals/loginAs'
import ClearUserAcc from '../../../components/Modals/clearacc'
import DeleteUser from '../../../components/Modals/deleteUser'
import SendMessage from '../../../components/Modals/sendMessage'
import axios from 'axios'


const UserPage = () => {
    const [user, setUsers] = useState({})
    const history = useHistory()
    const location = useLocation()
    const [loading, setLoading] = useState(false)

    const userId = location.state

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
          try {
            const response = await axios.get(`https://bitcoinserver.vercel.app/api/users/${userId}`);
            const userData = response.data;
            setUsers(userData);
            setLoading(false)
          } catch (error) {
            console.error(error);
            setLoading(false)
          }
        };
    
        fetchUser();
      }, [userId]);

      console.log(user)
        
    const handleButtonClick = () => {
        if (window.location.pathname === '/super-admin/user') {
        // If the current URL is '/super-admin/userlist'
        // Redirect to '/super-admin/userlist'
        history.push('/super-admin/userlist');
        } else {
        // If the current URL is not '/super-admin/userlist'
        // Redirect to '/super-admin/userlist'
        history.push('/super-admin/userlist');
        }
    };

    return(
        <div className="row flex-box">
                <div class="col-md-12">
                    <div class="p-3 card ">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 ">
                                    <h1 class="d-inline text-primary">{user.name}</h1><span></span>
                                    <div class="d-inline">
                                        <div class="float-right btn-group">
                                            {/* <a class="btn btn-primary btn-sm" href=""> <i class="fa fa-arrow-left" onClick={handleButtonClick}></i> back</a> &nbsp; */}
                                            <button type="button" class="btn btn-secondary dropdown-toggle btn-sm" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                              Actions
                                            </button>
                                            <div class="dropdown-menu dropdown-menu-lg-right">
                                                <a class="dropdown-item" href="">Block</a>
                                                <a href="#" data-toggle="modal" data-target="#topupModal" class="dropdown-item">Credit/Debit</a>
                                                <a href="#" data-toggle="modal" data-target="#clearacctModal" class="dropdown-item">Clear Account</a>
                                                <a href="#" data-toggle="modal" data-target="#TradingModal" class="dropdown-item">Add Trading History</a>
                                                <a href="#" data-toggle="modal" data-target="#edituser" class="dropdown-item">Edit</a>
                                                <a href="#" data-toggle="modal" data-target="#sendmailtooneuserModal" class="dropdown-item">Send Email</a>
                                                <a href="#" data-toggle="modal" data-target="#switchuserModal" class="dropdown-item text-success">Login as Dhiraj Dure</a>
                                                <a href="#" data-toggle="modal" data-target="#deleteModal" class="dropdown-item text-danger">Delete Dhiraj Dure</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 mt-4 border rounded row text-dark">
                                <div class="col-md-3">
                                    <h5 class="text-bold">Account Balance</h5>
                                    <p>${user.balance}</p>
                                </div>
                                <div class="col-md-3">
                                    <h5>Profit</h5>
                                    <p>${user.profit}</p>
                                </div>
                            
                                <div class="col-md-3">
                                    <h5>Inv. Plans</h5>
                                    
                                <p >{user.plan}</p>
                                                                        
                                </div>
                               
                                <div class="col-md-3">
                                    <h5>Trade Mode</h5>
                                    <span class="badge badge-success">On</span>
                                </div>
                            </div>
                            <div class="mt-3 row text-dark">
                                <div class="col-md-12">
                                    <h5>USER INFORMATION</h5>
                                </div>
                            </div>
                            <div class="p-3 border row text-dark">
                                <div class="col-md-4 border-right">
                                    <h5>Fullname</h5>
                                </div>
                                <div class="col-md-8">
                                   <h5>{user.name}</h5>
                                </div>
                            </div>
                            <div class="p-3 border row text-dark">
                                <div class="col-md-4 border-right">
                                    <h5>Email Address</h5>
                                </div>
                                <div class="col-md-8">
                                   <h5>{user.email}</h5>
                                </div>
                            </div>
                            <div class="p-3 border row text-dark">
                                <div class="col-md-4 border-right">
                                    <h5>Mobile Number</h5>
                                </div>
                                <div class="col-md-8">
                                   <h5>{user.phone}</h5>
                                </div>
                            </div>
                            <div class="p-3 border row text-dark">
                                <div class="col-md-4 border-right">
                                    <h5>Plan</h5>
                                </div>
                                <div class="col-md-8">
                                   <h5>{user.plan}</h5>
                                </div>
                            </div>
                            <div class="p-3 border row text-dark">
                                <div class="col-md-4 border-right">
                                    <h5>Nationality</h5>
                                </div>
                                <div class="col-md-8">
                                   <h5>{user.country}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* All modals go here */}
                <div class="modal" tabindex="-1" id="topupModal" role="dialog">
                    <div class="modal-dialog" role="document">
                        <DepositWidraw user={user}/>
                    </div>
                </div>

                {/* Another one */}
                <div class="modal" tabindex="-1" id="clearacctModal" role="dialog">
                    <div class="modal-dialog" role="document">
                        <ClearUserAcc user={user}/>
                    </div>
                </div>

                {/* Another one */}
                <div class="modal" tabindex="-1" id="TradingModal" role="dialog">
                    <div class="modal-dialog" role="document">
                        <History user={user}/>
                    </div>
                </div>

                {/* Another one */}
                <div class="modal" tabindex="-1" id="switchuserModal" role="dialog">
                    <div class="modal-dialog" role="document">
                        <LoginAs user={user}/>
                    </div>
                </div>

                {/* Another one */}
                <div class="modal" tabindex="-1" id="deleteModal" role="dialog">
                    <div class="modal-dialog" role="document">
                        <DeleteUser user={user}/>
                    </div>
                </div>

                {/* Another one */}
                <div class="modal" tabindex="-1" id="sendmailtooneuserModal" role="dialog">
                    <div class="modal-dialog" role="document">
                        <SendMessage user={user}/>
                    </div>
                </div>
            </div>
    )
}
export default UserPage