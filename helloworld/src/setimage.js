import React from 'react';
import ReactDom from 'react-dom';


class Employee extends React.Component{
    render() {
        let setimage = {
            width : '50%'
        }
    return (
        <>
        <h1>Hellllo Bike </h1>
        <img style = {setimage} src = {process.env.PUBLIC_URL+'images/gunmetal-grey-1.jpg'} alt = 'the bike'/>
        </>
    );    
    }
}
ReactDom.render(<Employee isLoggedIn = {false}/>,document.getElementById('root'))

 