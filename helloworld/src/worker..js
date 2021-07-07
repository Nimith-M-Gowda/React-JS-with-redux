import React from 'react';
import {Button,Form, Container} from 'react-bootstrap'
import Department from './department'
import Salary from './salary'
import {Consumer} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class Worker extends React.Component{
    constructor (props){
        super (props)
        this.state = {
            formcontrollerme : {
                name : '' ,                                
            },

            totalsalary : '',
        }
    }
//============================================
    formhandler = (event) => {
      this.setState({

        formcontrollerme : {
                ...this.state.formcontrollerme , [event.target.name] : event.target.value
        }
      })
          
    }
    componentDidMount() {
        let data = new Salary();
        if(data.state.totalsalary === null){

        }
        else {
            this.setState({
                totalsalary : data.state.totalsalary
            })
        }
    }
//=====================================================
    render () {
        

        
console.log(this.state.totalsalary)
        return (

          
            <Container>
              <h2>Employee Details</h2>
  <Form>
  
  <Form.Group >
      <Form.Label>Employee Name</Form.Label>
      <Form.Control type="text" name = 'name' value = {this.state.name} placeholder="enter employee name" onChange = {this.formhandler}/>     
  </Form.Group>


    <Department name = {this.state.formcontrollerme.name} />
    
    <Consumer>
    {data =><h1>Finally total salary of Employee {this.state.formcontrollerme.name} is : {data} </h1>}
    </Consumer>


</Form>
           
            </Container> 
        );
    }
}

export default Worker ;