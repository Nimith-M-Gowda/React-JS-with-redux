import React from 'react';

class Forming extends React.Component {

    constructor (props) {
            super(props)
            this.state = {
                formcontroller : {
                    name : '' ,
                    email : '' ,
                    phone : '' ,
                },
                // result : {}
            }

    }

    formhandler = (event) => {
            this.setState({formcontroller : {
                ...this.state.formcontroller,[event.target.name] : event.target.value 
            }  })
            
    }

    submithandler = (event) => {
        event.preventDefault();
        // this.setState({result : this.state.formcontroller})        
        this.props.sendresult(this.state.formcontroller)
    }
    

    render() {
        
        // let data  = this.state.result === null ? null : this.state.result ;

        return (
            
            <>
            <h1>Contact Form</h1>
            <center>
                <form onSubmit = {this.submithandler}>
                <label>Name : 
                    <input type = 'text' name = 'name' value = {this.state.formcontroller.name} onChange ={ (e) => {this.formhandler(e)}} />
                </label> <br/><br/>
                <label>Email : 
                    <input type = 'text' name = 'email' value = {this.state.formcontroller.email} onChange ={ (e) => {this.formhandler(e)}} />
                </label> <br/><br/>
                <label>Phone No : 
                    <input type = 'text' name = 'phone' value = {this.state.formcontroller.phone} onChange ={ (e) => {this.formhandler(e)}} />
                </label><br/><br/>
                <input type = 'submit' value = 'submit'/>
                </form> 
            </center> 
        {/* <h3>{JSON.stringify(data)}</h3> */}
            </>
        );
    }

} 

export default Forming