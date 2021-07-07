import React ,{Component, createContext} from 'react';
import Cb from './componentB';
export let Mycontext = React.createContext();

class A extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0 ,
        }
    }
    countup = () => {
        this.setState({state : ++this.state.count})
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