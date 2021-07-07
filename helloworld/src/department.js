import React from 'react'
import {Button,Form, Container} from 'react-bootstrap'
import Salary from './salary'
import 'bootstrap/dist/css/bootstrap.min.css';
import S from './example'

class Department extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            tt : {
                name : this.props.name,
            workingdays : '' ,
            workinghours : '' ,
            },
            totalsalary : null ,
            totalworkingtime : '' ,
            
        }
    }
    
    formhandler = (event) =>{
        this.setState({
            tt : {
               ...this.state.tt , [event.target.name] : event.target.value     
            }
            
        })
    }

    getsalaryimp  = (val) => {
           this.setState({
               ...this.state.totalsalary,totalsalary : val
           }) 
           console.log('this.state.totalsalary in department',this.state.totalsalary)
    }
    
    

    render() {
        
        
        return (
            <>
               
            <Container>
            
            <h2>Department Details</h2>
            <S/>
<Form>

<Form.Group >
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="text" name = 'name' value = {this.props.name} placeholder="enter employee name" onChange = {this.formhandler}/>     
</Form.Group>

<Form.Group >
  <Form.Label>Employee Working Days</Form.Label>
  <Form.Control type="text"  name = 'workingdays' value = {this.state.tt.workingdays} placeholder="enter employee workng days" onChange = {this.formhandler}/>
</Form.Group>

<Form.Group >
  <Form.Label>Employee Working Hours</Form.Label>
  <Form.Control type="text"  name = 'workinghours' value = {this.state.tt.workinghours} placeholder="enter employee workng hours" onChange = {this.formhandler}/>
</Form.Group>

<Form.Group >
  <Form.Label>Employee total working time</Form.Label>
  <Form.Control type="text"  name = 'totalworkingtime' value = {this.state.tt.workinghours*this.state.tt.workingdays}  />
</Form.Group>


</Form>
<Salary name = {this.props.name} totalworkingtime = {this.state.tt.workinghours*this.state.tt.workingdays} getsalaryimp = {this.getsalaryimp}/>
          </Container>
          </> 
        );
    }
}



export default Department