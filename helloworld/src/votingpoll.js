import React from 'react';
const HOCvotingpoll = (inputcomponent) => {
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count : null,
            }
        }
        mousehandler = () => {
            this.setState({
                count : this.state.count + 1
            })
        }
        render() {      
            return(
                <>
                <h1>Next CM candidate from {inputcomponent} is {this.props.name}</h1>
                <h2 onMouseOver = {this.mousehandler}>Vote count : {this.state.count} </h2>
                </>
            );
        }
    }
}

export default HOCvotingpoll;