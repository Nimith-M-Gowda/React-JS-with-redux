// import React, { Component } from 'react'
// import Y from './stating_child'

// export default class stating_parent extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count:0,
//         }
//     }
//     increment__count = () => {
//         this.setState({count: this.state.count+1})
//     }
//     render() {
//         return (
//             <>
//                 <Y ic={this.increment__count}/>
//                 <h4>count is {this.state.count}</h4>
//             </>
//         )
//     }
// }
import React,{useState} from 'react'
import Y from './stating_child'

export default function Stating_parent() {
    const [count, setcount] = useState(0);
    let ih = () => {
        setcount(count+1);
    } 
    console.log(count)
    return (
        <>
            <Y ic={ih}/>
            <h4>count is {count}</h4>
        </>
    )
}





















