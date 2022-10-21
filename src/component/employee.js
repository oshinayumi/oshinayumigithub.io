import React, { useEffect } from 'react';
import axios from 'axios'

function Employee() {

    //use useEffect hook whenever you want to call
    //remote REST API
    //useEffect(callbackfunction, array) => useEffect(())=>{}

    useEffect(()=>{
        callRestApi()
    },[])

    const callRestApi=()=>{
        axios.get("https://dummy.restapiexample.com/api/v1/employees")
        .then(response=>{
            console.log(response)
        })
    }
    return (  
        <div>
            <h1>Remote Employee Data</h1>
        </div>
    );
}

export default Employee;