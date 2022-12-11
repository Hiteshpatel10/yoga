import React from 'react'
import supabase from "../config/SupabaseClient";
import {useEffect, useState} from 'react'


function Home() {

    const [fetchError, setFetchError] = useState(null); 
    const [data, setData] = useState(null);

    const sql = `
        SELECT *
        FROM user 
        JOIN subscription orders ON user.id = subscription.id
        `;
    
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
    <div className="home">
        <p>data</p>
        {fetchError && (<p>fetchError</p>)}

        {console.log(data)}
        {data && (
            <div>
                {data.map(item => (
                    <p>{item.is_paid}</p>
                ))}
            </div>
        )}
        
    </div>
  )
}

export default Home
