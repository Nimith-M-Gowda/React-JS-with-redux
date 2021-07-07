import React from 'react'
import {Button,Form, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context'
class Salary extends React.PureComponent {
    constructor (props) {
            super (props);
            this.state = {
                
                    name : '',
                    salaryperhour : '',
                    totalsalary : '',
                
                                      
            }
        }

        formhandler = (event) => {
                this.setState({
                
                       [event.target.name] : event.target.value
                
                    
                })

             

        }
     
    
            formvalhandler = (event) => {
                
            this.setState({
                
                salaryperhour : event.target.value , 
                totalsalary : event.target.value*this.props.totalworkingtime
                
         })
         
        }
    

    
        



simplefunc= () =>{
    if(this.state.totalsalary){
        this.props.getsalaryimp(this.state.totalsalary);
    }
    
}

componentDidMount(){
        this.simplefunc();
}




    render () {
      
            // console.log('this.state.salarycontroller.totalsalary',this.state.totalsalary)

        return (
      <>
            <Provider value={this.state.totalsalary} ></Provider>
                  
            <Container>

<h2>Salary Details</h2>
<Form >

<Form.Group >
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="text" name = 'name' value = {this.props.name} placeholder="enter the name" onChange = {this.formhandler}/>     
</Form.Group>

<Form.Group >
    <Form.Label>Salary per hour</Form.Label>
    <Form.Control type="text" name = 'salaryperhour' value = {this.state.salaryperhour} placeholder="enter salary per hour" onChange = {this.formvalhandler}/>     
</Form.Group>

    <Form.Group >
      <Form.Label>Total Salary of the Employee</Form.Label>
      <Form.Control type="text"  name = 'totalsalary' value = {this.state.totalsalary}/>
    </Form.Group>



</Form>
         
            </Container></>
        ) ;
    }
}

export default Salary