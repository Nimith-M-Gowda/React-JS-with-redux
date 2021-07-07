import React ,{Component} from 'react';
import {Mycontext} from './componentA'

class D extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    render () {
        console.log('Am a consumer object',Mycontext.Consumer)
        return (
            <>
            <h1>from CD</h1>
            <h5>am value from Component A</h5>
                        
            <Mycontext.Consumer>
        {
        data => 
        
            <>
            <h1>{data.count}</h1>
            <button onClick = {data.countup}>CLICK ME</button>
            </>   
        }
        
    </Mycontext.Consumer>
            </>
        );
    }
}

export default D;