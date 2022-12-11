import React from 'react'

function CustomerSubscription({data}) {

    {console.log(data)}
    if (data) {
        if (data.is_enrolled) {
          return (
            <div className='p-1'>True</div>
          );
        } else {
          return  (
              <button className='btn btn-primary'>Enroll</button>
          );
        }
      } else {
        return  (
          <button className='btn btn-primary'>Enroll</button>
          );
      }
}

export default CustomerSubscription