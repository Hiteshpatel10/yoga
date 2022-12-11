import React from 'react'
import CustomerSubscription from './CustomerSubscription';

function CustomerData(props) {

    const data = props.data;
    const subscription = props.data.subscription

  return (
    <div className="container card shadow-sm py-2 mb-2 mx-auto">
    <div className="row w-100">
        <div className="col-sm text-primary">
            {data.id}
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
            <CustomerSubscription data={subscription} keys={data.id}/>
        </div>

        
        
    </div>
</div>
  )
}

export default CustomerData