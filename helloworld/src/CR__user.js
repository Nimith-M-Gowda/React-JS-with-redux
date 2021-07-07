import React, { Component } from 'react'

export default class CR__user extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                   <h2>Hello User</h2>
                   <h2> Welcome Back</h2>
                   <button onClick = {this.props.handler}>LOG OUT</button>         
            </div>
        )
    }
}
