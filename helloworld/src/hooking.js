import React,{useState,useEffect} from 'react'

export default function Hooking() {
    const [state, setstate] = useState(0);
    const [status, setstatus] = useState(false)
    useEffect(() => {
        console.log('run')
    },[state])
    console.log('status is',status)
    return (
        <div>
            <center>
            <h3>hai</h3>
    <h3>the count is {state}</h3>    
    <button onClick = {() =>{
setstate(state+1);
if(status == true){
    setstatus(false);
} else {
    setstatus(true);       
}


    }}>CLICK ME</button>
            </center>
        </div>
    )
}
