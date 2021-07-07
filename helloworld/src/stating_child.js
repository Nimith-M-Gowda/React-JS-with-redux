import React, { Component } from 'react'

export default class stating_child extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            
            <>
              <button style={{backgroundColor:'yellow'}} onClick = {this.props.ic}>Click Me</button>  
            </>
        )
    }
}
