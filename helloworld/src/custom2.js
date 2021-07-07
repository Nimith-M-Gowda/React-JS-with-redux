import React from 'react'
import usefunc from "./custom1";
export default function custom2() {

    let data = usefunc() ;
    return (
        <div>
            <center>
            <h3>data is {data.state}</h3>
            <button onClick = {() => {data.incre()}}>CLICK ME</button>
            </center>
        </div>
    )
}
