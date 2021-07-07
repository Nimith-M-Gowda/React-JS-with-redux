import React from 'react'
import usecustomhook from './customhook_provider'

export default function Customhook_consumer() {
    let data = usecustomhook();
    console.log(data);
    return (
        <>
            <button onClick = {data.incementsalary}>Click Me</button>  
            <h3>Salary is {data.salary}</h3>
            {/* <p>{data.f}</p> */}
        </>
    )
}
