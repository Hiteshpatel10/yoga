import React from 'react'
import { useNavigate } from 'react-router-dom';

function CustomerSubscription({id, data}) {

  let navigate = useNavigate();

  function handleClick() {
    navigate('/user-subscription/' + id);
  };

    if (data) {
        if (data.is_enrolled) {
          return (
            <button className='btn btn-success'>Active</button>
          );
        } else {
          return  (
              <button className='btn btn-danger' onClick={handleClick}>Enroll</button>
          );
        }
      } else {
        return  (
          <button className='btn btn-danger' onClick={handleClick}>Enroll</button>
          );
      }
}

export default CustomerSubscription