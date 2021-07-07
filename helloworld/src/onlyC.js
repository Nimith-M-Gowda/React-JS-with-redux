// import React, { Component } from 'react'
// import D from './onlyD'

// export default class OnlyC extends Component {
//     render() {
//         return (
//             <div>
//                 <D/>
//             </div>
//         )
//     }
// }
import React ,{Component} from 'react';
import Cd from './onlyD'

class C extends Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <>
            <h1>from CC</h1>
            <Cd/>
            </>
        );
    }
}

export default C;