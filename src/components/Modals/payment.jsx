import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Payment = ({method, amount}) => {

      

    return (
        <div class="modal-content">
        <div class="modal-header bg-light">
        <h6 class="modal-title text-dark">{`You have chosen pay using ${method}`}</h6>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
            <Link  to={{
                pathname: "/admin/payment",
                state: amount
                }} >
            <button className="btn btn-success">Proceed to payment</button>
            </Link>
        </div>
    </div>
    )
}
export default Payment