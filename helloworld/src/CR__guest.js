import React, { Component } from 'react'

export default class CR__user extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                   <h2>Hello Guest</h2>
                   <h2> Please Login</h2>
                   <button onClick = {this.props.handler}>LOG IN</button>         
            </div>
        )
    }
}
