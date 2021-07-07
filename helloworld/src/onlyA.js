// import React, { Component } from 'react'
// import B from './onlyB';
// export let Mycontext = React.createContext(); 


// export default class OnlyA extends Component {
//    constructor(props){
//     super();
//     this.state = {
//         value : 0,
//     }
//    }
   
//    valueincre = () => {
//        this.setState({value : this.state.value + 1})
//    }
//     render() {
//         let data = {
//             count : this.state.value ,
//             countup : this.valueincre,
//         }
//         return (
//             <div>
//                 <Mycontext value = {data}>
//                     <B/>
//                 </Mycontext>
//             </div>
//         )
//     }
// }
import React ,{Component} from 'react';
import Cb from './onlyB';
export let Mycontext = React.createContext();

class A extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0 ,
        }
    }
    countup = () => {
        this.setState({count : ++this.state.count})
    }
    render () {
        let data = {
            count: this.state.count ,
             countup : this.countup,
        }
        return (
            <>
            <h1>from CA</h1>
            <Mycontext.Provider value = {data}>
                <Cb/>
            </Mycontext.Provider>
            </>
        );
    }
}

export default A;