import React, { Component, createRef } from 'react'

export default class form__handling2 extends Component {
    constructor () {
        super();
        this.state = {
            formhandler : {
                name : '',
                age : '',
                email : '',
            },
            subdata : '',
        }
        
    }
    changeEvent = (event) => {
        console.log('ccccccccccccs')
        this.setState({
            formhandler : {
                ...this.state.formhandler,[event.target.name] : event.target.value 
            }
        })
      
    }
    submithandler = async (event) => {
        event.preventDefault();
       await this.setState({subdata : [this.state.formhandler]});
       await console.log('this.state.subdata',this.state.subdata)
}
    render() {
        return (
            <center>
            <div>
                <form onSubmit =  {this.submithandler}>
                        <label>Name</label>
                        <input type = 'text' name = 'name' value = {this.state.formhandler.name} onChange = {(e) => this.changeEvent(e)}/><br/>
                        <label>Age</label>
                        <input type = 'text' name = 'age' value = {this.state.formhandler.age} onChange = {(e) => this.changeEvent(e)}/><br/>
                        <label>Email</label>
                        <input type = 'text' name = 'email' value = {this.state.formhandler.email} onChange = {(e) => this.changeEvent(e)}/><br/>
                    <button type = 'submit'>SUBMIT</button>
                </form>

        <h3>data submittted is {JSON.stringify(this.state.subdata)}</h3>
            </div>
            </center>
        )
    }
}
