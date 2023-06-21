import React from 'react'
import {Link} from 'react-router-dom'

const TopPanel = () => {
    return(
        <div class="panel-header px-5">
        <div class="py-2 page-inner">
            <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                <div>
                    <h5 class="mb-2 text-white op-7">Welcome</h5> 
                </div>
                <div class="py-2 ml-md-auto py-md-0">
                    <Link to='/super-admin/userlist'>
                    <a href="" class="btn btn-primary ">Users</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
export default TopPanel