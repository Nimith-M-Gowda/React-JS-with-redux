import React , {Component} from 'react'
import Hoc from './HOCcombiner';

class Clicking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <button onClick = {this.props.countincrement}>CLICK me to increase by 10 times of {this.props.count} by the man named {this.props.name}</button>
            </>
        );
    }
}
export default Hoc(Clicking , 10)