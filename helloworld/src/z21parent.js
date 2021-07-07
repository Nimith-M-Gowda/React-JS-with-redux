// import React,{useState} from 'react'
// import Child from './z21child';

// export default function ZP() {
//     let setting = (rot) => () => {
//         setcount(Number(count) + Number(rot))

//     }
//     const [count,setcount] = useState('0')
//     return (
//         <div>
//             <center>
//             <Child addon = {setting} val = {count}/>
//             </center>
//         </div>
//     )
// }
import React, { Component } from 'react'
import Child from './z21child'

export default class z21parent extends Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
        }
    }
    setcount = (r) => {
        this.setState({count : this.state.count + r})
    }
    render() {
        return (
            <div>
                <center>
        <Child val = {this.state.count} func = {this.setcount}>{'NNIIMMIITTHH'}</Child>
                </center>
            </div>
        )
    }
}
