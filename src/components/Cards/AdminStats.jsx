import React from 'react'

const AdminStats = (user) =>{
    console.log(user.user.length)
    return(
        <div class="page-inner mt--5 ">
                <div class="row row-card-no-pd bg-light shadow-lg mt--2 py-5 px-5 flex flex-box">
                   
                    <div class="col-sm-6 col-md-3">
                        <div class="card card-stats card-round bg-light">
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="text-center icon-big">
                                            <i class="flaticon-users text-success"></i>
                                        </div>
                                    </div>
                                    <div class="col-8 col-stats">
                                        <div class="numbers">
                                            <p class="card-category">Total Users</p>
                                            <h4 class="card-title text-dark">{user.user.length}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="card card-stats card-round bg-light">
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="text-center icon-big">
                                            <i class="flaticon-remove-user text-danger"></i>
                                        </div>
                                    </div>
                                    <div class="col-8 col-stats">
                                        <div class="numbers">
                                            <p class="card-category">Block Users</p>
                                            <h4 class="card-title text-dark">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="card card-stats card-round bg-light">
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="text-center icon-big">
                                            <i class="flaticon-user-2 text-success"></i>
                                        </div>
                                    </div>
                                    <div class="col-8 col-stats">
                                        <div class="numbers">
                                            <p class="card-category">Active Users</p>
                                            <h4 class="card-title text-dark">{user.user.length}</h4> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-6 col-md-3">
                        <div class="card card-stats card-round bg-light">
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="text-center icon-big">
                                            <i class="flaticon-diagram text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="col-8 col-stats">
                                        <div class="numbers">
                                            <p class="card-category">Investment Plans</p>
                                            <h4 class="card-title text-dark">3</h4> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="overflow-auto">
                            <canvas id="myChart" height="209" class="text-dark" style={{display: "block", boxSizing: "border-box", height: "209px", width: "627px"}} width="627"></canvas>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
    )
}
export default AdminStats