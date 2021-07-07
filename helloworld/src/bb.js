import React from 'react';

class Tutor extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            value : 45,
        }
    }
    
    func = () =>{
        if(this.state.value){
            this.props.getitem(this.state.value)
    }
}

componentDidMount() {
    this.func();
}
    render() {                        
        return (
            <>
              {/* <button onClick = {this.func}>Click me</button>   */}
            </>
        );
    }
}
export default Tutor