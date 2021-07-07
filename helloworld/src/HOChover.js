import React from 'react';
import HOC from './HOCcombiner'

class Hover extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
<>
        <h1 onMouseOver = {this.props.countincrement}>incrementing 100 times by hover with count {this.props.count} buy person named {this.props.name}</h1> 
</>

        ) ;
    }
}
export default HOC(Hover , 100)