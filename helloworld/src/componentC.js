import React ,{Component} from 'react';
import Cd from './componentD'

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