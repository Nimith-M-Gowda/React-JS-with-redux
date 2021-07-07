import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom' 
import { render } from '@testing-library/react';
class Routing extends React.Component {
    

    render(){
        return (
            <>
            <div>
                <Router>
                            <Header/>
                            <CustomComponent/>
                </Router>   
                </div>           
            </>
        );
    }
}


function Header (){
        return(
            <ul>
            <li><Link to = '/'>Home</Link></li> 
            <li><Link to = '/about'>About us</Link></li> 
            <li><Link to = '/contact'>contact us</Link></li>                     
            <li><Link to = '/services'>Services</Link></li> 
        </ul> 
        )
}


function CustomComponent () {
    return (
        <Switch>
        <Route exact path = '/'  component = {Home}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/contact' component = {Contact}/>
        <Route path = '/services' component = {Services}/>
        <Route component = {Notfound}/>
        </Switch>
    )
}

function Notfound (){
    
    return (
        <>
       <h1> 404Notfound</h1>
        </>
    );

}
function Home (){
    
        return (
            <>
           <h1> Welcome to Home</h1>
            </>
        );
    
}
function Contact (){
    
    return (
        <>
       <h1> Welcome to Contact</h1>
        </>
    );

}
function Services (props){
    console.log(props)
    return (
        <>
       <h1> Welcome to Services</h1>

       <ul>
            <li>Web Designing</li>
            <li>Web development</li>
            <li>Mobile development</li>
        </ul>

        </>
    );

}
function About (){
    
    return (
        <>
       <h1> Welcome to About</h1>
        </>
    );

}
export default Routing