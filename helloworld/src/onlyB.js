// import React, { Component } from 'react'
// import C from './onlyC'

// export default class OnlyB extends Component {
//     render() {
//         return (
//             <div>
//                 <C/>
//             </div>
//         )
//     }
// }
import React ,{Component} from 'react';
import Cc from './onlyC'

class B extends Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <>
            <h1>from CB</h1>
            <Cc/>
            </>
        );
    }
}

export default B;