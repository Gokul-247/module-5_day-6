import React,{ useEffect, useState} from 'react'
import axios from 'axios'

function Random_user() {
    const [user,setUserData] = useState(null)
    const URL = "https://randomuser.me/api/?results=1"
    function fetchAPI(){
        axios.get(URL)
        .then(response => setUserData(response.data.results[0]))
        .catch(error => console.log("Error in fetching the data",error))
    }
    console.log(user);

    useEffect(() => {
        fetchAPI();
    },[]);
    
  return (
    <div>
        { user ? (
            <div>
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>
            </div>
        ) : (
            <div>
                <p>Loading.... user data</p>
            </div>
        )}
    </div>
  )
}

export default Random_user