import React from 'react';

 

class EmployeeB extends React.Component {

    constructor (props) {
    super(props);
    this.state = {
      name : props.namee ,
      age : props.agee ,
    }
  }
  
  static getDerivedStateFromProps(props,state) {
    console.log(state,props);
    if(state.age !== props.agee){
        state.age = state.age + 1
    }
    return null
  }
  render () {
    return (<>
    <h4> Am EMPLOYYEE B</h4>
    <h1>Am {this.state.name}</h1>
    <h1>Am at age {this.state.age}</h1>
    </>);
  }
}

export default EmployeeB