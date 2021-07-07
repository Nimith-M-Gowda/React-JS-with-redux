import React, { Component } from 'react'

export default class Inline__css extends Component {
    state = {
        change : false ,
    }
   
    colorChange = () => {
        (this.state.change) ? this.setState({change:false}) : this.setState({change:true}) 
    }
    render() {
        let property = {
            backgroundColor:'',
        }
        if(this.state.change){

            property.backgroundColor = 'yellow';
        }
        return (
            <div>
                <button style = {property} onClick = {this.colorChange}>CLICK ME</button>
            </div>
        )
    }
}
