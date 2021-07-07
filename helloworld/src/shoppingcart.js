import React from 'react'
import {Card,Button,CardGroup, CardDeck, CardColumns} from 'react-bootstrap'
import GetCard from './getcard'
class ShoppingCart extends React.Component{
    constructor (props) {
        console.log('constructor')
        super (props);
        this.state= {
            count : 1,
        }
    }
//     rendercard = () => {
//         return (
//         );
        
//     }  
//     rendercardcomp = () => {
//         if(this.state.count < 7){
            
//             this.rendercard
//         }
//         this.setState({count : this.state.count + 1 })
// }
    

render(){            
    console.log('render')
return (
    <>        
    <CardColumns>                
    <GetCard
src = {process.env.PUBLIC_URL+(`images/${this.state.count}.jpg`)}
title = {'classic 350'} 
text = {'old pride classic bike'} 
buttontext = {'BOOK NOW'}
/>    
    </CardColumns>
    

    </>

);
       

        
       }

}

export default ShoppingCart