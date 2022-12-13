import React from 'react'
import supabase from "../config/SupabaseClient";
import {useEffect, useState} from 'react'
import CustomerData from '../components/CustomerData'
import { useNavigate } from 'react-router-dom';


function Home() {

    const [fetchError, setFetchError] = useState(null); 
    const [data, setData] = useState(null);
    let navigate = useNavigate();

  function handleClick() {
    navigate('/add-customer');
  };

    useEffect(()=> {
        const fetchData = async () => {
            const {data, error} = await supabase
                .from('user')
                .select('*, subscription(*)')

            if(error){
                setFetchError("Error 404")
                console.log(error);
                setData(null)
            }

            if(data){
                setData(data)
                setFetchError(null)
            }
        }

        fetchData();
    },[])

  return (
    <div className="container p-5">
        <button className="btn btn-primary btn-fab"  onClick={handleClick}> Add Customer </button>
        <p className="pt-4 text-success font-weight-bold">CUSTOMER DATA</p>
        {fetchError && (<p>fetchError</p>)}

        <div class="row w-100">
        <div class="col-sm">
            id
        </div>
        <div class="col-sm">
            Name
        </div>
        <div class="col-sm">
            contact no
        </div>
        <div class="col-sm">
            data of birth
        </div>
        <div class="col-sm">
            enrolled
        </div>

    </div>
        {data && (
            <div>
                {data.map(item => (
                    <CustomerData data={item} key={item.id}/>
                ))}
            </div>
        )}
      
    </div>
  )
}

export default Home
