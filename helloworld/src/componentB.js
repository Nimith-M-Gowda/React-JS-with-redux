import React ,{Component} from 'react';
import Cc from './componentC'

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