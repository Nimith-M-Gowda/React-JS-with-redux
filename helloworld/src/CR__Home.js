import React, { Component } from 'react'
import User from './CR__user';
import Guest from './CR__guest';

export default class CR__Home extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoggedIn : false,
        }
    }
    logInHandler = () => {
        return this.setState({isLoggedIn:true});
    }
    logOutHandler = () => {
        return this.setState({isLoggedIn:false});
    }
    render() {
        // let data;
        // if(this.state.isLoggedIn){
        //     console.log('going inside loop')
        //     data = <User handler = {this.logOutHandler}/>
        // }else {
        //     data = <Guest handler = {this.logInHandler}/>
        // }
        return (
            <>
            {this.state.isLoggedIn ? <User handler = {this.logOutHandler}/>:<Guest handler = {this.logInHandler}/>}
                {/* {data} */}
            </>
        )
    }
}
