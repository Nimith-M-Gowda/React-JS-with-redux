import React from 'react';
import ReactDom from 'react-dom';

class Employee extends React.Component{
    constructor (props) {
        super(props)
    this.state = {
        colorstate : false
    }
    }
   
    changecolorstate = () => {
            
            this.state.colorstate === true ? this.setState({colorstate : false}) : this.setState({colorstate : true})
    }
    render () {

        let colorchange = () => {
            textstyle.backgroundColor = 'red'
        }

        let colornochange= () => {
        
        }

        let textstyle={
            color : 'white' ,
            backgroundColor : 'black'
        }

       this.state.colorstate === true ? colorchange() : colornochange()
     
        return (
            <>              
            <h1 style = {{...textstyle,...{textAlign : 'center'}}}>Hello Employee</h1>
            <button onClick = {this.changecolorstate}> click me to change backgroundcolor </button>
            </>
        );
    }
}
ReactDom.render(<Employee isLoggedIn = {false}/>,document.getElementById('root'))

