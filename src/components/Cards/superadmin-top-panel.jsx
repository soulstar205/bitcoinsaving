import React from 'react'

const TopPanel = () => {
    return(
        <div class="panel-header bg-primary-gradient px-5">
        <div class="py-5 page-inner">
            <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                <div>
                    <h5 class="mb-2 text-white op-7">Welcome, Bitcoin Saver</h5> 
                </div>
                <div class="py-2 ml-md-auto py-md-0">
                    <a href="" class="mr-2 btn btn-success btn-border ">Deposits</a>
                    <a href="" class="mr-2 btn btn-danger btn-border ">Withdrawals</a>
                    <a href="" class="btn btn-secondary ">Users</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default TopPanel