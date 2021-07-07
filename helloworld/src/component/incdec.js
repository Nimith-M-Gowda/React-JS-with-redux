import React,{useState} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {decrement_action,increment_action,insert_action} from '../redux/index'

export default function Incdec() {

    const number = useSelector(state => state.num);
    const dispatch = useDispatch();
    const [data, setdata] = useState()
   let inputhandler = (e) => {
        setdata(Number(e.target.value));
    }
    return (
        <center>
        <div>
            <div>
                <h3>THE NUMBER IS {number}</h3>
            </div>
            <button onClick = {(e) => {dispatch(increment_action())}}>INCREMENT</button>
            <button onClick = {(e) => {dispatch(decrement_action())}}>DECREMENT</button>
            <div>
                <input type = 'text' name = 'number' value = {data} onChange = {(e) => inputhandler(e)} />
            </div>
            <div>
                <button onClick = {(e) => {dispatch(insert_action(data))}}>CONFIRM</button>
            </div>
        </div>
        </center>
    )
}
