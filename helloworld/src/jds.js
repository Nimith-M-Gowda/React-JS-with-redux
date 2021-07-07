import React from 'react';
import ReactDom from 'react-dom';

class JDS extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            count : null,
        }
    }

    counthandler = (event) => {
        this.setState({
            count : this.state.count+1 ,
        })
    }
    render (){
        return (
            <>
            <h1>Next CM Candidate from JDS : {this.props.name}</h1>
        <h2 onMouseOver = {this.counthandler}>vote Count : {this.state.count}</h2>
            </>
        );
    }
}


export default JDS