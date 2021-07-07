import React from 'react';


class Congress extends React.Component{
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
            <h1>Next CM Candidate from Congress : {this.props.name}</h1>
        <h2 onMouseOver = {this.counthandler}>vote Count : {this.state.count}</h2>
            </>
        );
    }
}


export default Congress