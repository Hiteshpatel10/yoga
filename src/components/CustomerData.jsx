import React from 'react'
import CustomerSubscription from './CustomerSubscription';
import { Navigate, useNavigate } from 'react-router-dom';

function CustomerData(props) {

    const data = props.data;
    const subscription = props.data.subscription

    let navigate = useNavigate();

    function navigateToClientDetails() {
        var id = data.id
        navigate('/client-details/' + id)
    };

  return (
    <div className="container card shadow-sm py-2 mb-2 mx-auto">
    <div className="row w-100">
        <div className="col-sm text-primary">
            <button className='btn btn-info' onClick={navigateToClientDetails}>{data.id}</button>
        </div>
        <div class="col-sm text-primary">
            {data.first_name}  {data.last_name}
        </div>
        <div className="col-sm text-primary">
            {data.contact_no}
        </div>
        <div className="col-sm text-primary">
            {data.date_of_birth}
        </div>
        <div className="col-sm text-info">
            <CustomerSubscription id={data.id} data={subscription} keys={data.id}/>
        </div>
    </div>
</div>
  )
}

export default CustomerData