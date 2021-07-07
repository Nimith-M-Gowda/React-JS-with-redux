 import React , {Component} from 'react' ;

class Forming extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            formcontroller : {name : '',
            email : '',
            phone : ''},
            result : null
        } 
        }
    

    
    changeHandler = (event)  => {
        let key = event.target.name ;
        let value = event.target.value ;
        this.setState({
             
               formcontroller : { ...this.state.formcontroller ,[key] : value } 
             
        });
      
        }

    submithandler = (event) => {
        
        this.props.setresult(this.state.formcontroller)
        this.setState ({result : this.state.formcontroller})
        event.preventDefault();
        
           
    }
    render () {
        let data = {} ;
        {(this.state.result ) ? data = JSON.stringify(this.state.result)  : data = null }
        return (
            <>
            <center>
            <form onSubmit = {this.submithandler} >
                <label> Name : </label>
                <input type = 'text' name= 'name' value = {this.state.formcontroller.name} onChange = {this.changeHandler }  />
                <br/><br/>
                <label> Email : </label>
                <input type = 'text' name= 'email' value = {this.state.formcontroller.email} onChange = {this.changeHandler} />
                <br/><br/>
                <label> Phone No : </label>
                <input type = 'text' name= 'phone' value  = {this.state.formcontroller.phone} onChange = {this.changeHandler} />
                <br/><br/>
                <input type = 'submit' value = 'submit'/>

            </form>
            <h3>{data} </h3>
        </center>
            </>
        );
    }

}

export default Forming;