// import React from 'react'
// export default function ZC({val,addon}) {
//     let f = 90;
//     return (
//         <div>
//             <h3>Count is {val}</h3>
//             <button onClick = {addon(f)}>CLICK ME</button>
//         </div>
//     )
// }
import { func } from 'prop-types';
import React, { Component } from 'react'

export default class z21child extends Component {
    constructor(props) {
        super();
    }
    render() {
        let car = ['maruti' ,'skoda' ,'baleno']
        let f = 90 ;
       
        return (
            <div>
                <h3>count is {this.props.val}</h3>
                <button onClick = {() => this.props.func(f)}>CLICK ME</button>
                <h1>{this.props.children}</h1>
                
        {car.map((e,i)=>(<li>{e}</li>))}
                
            </div>
        )
    }
}
