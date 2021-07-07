import React from 'react';
import ReactDom from 'react-dom';
import Ca from './componentA'

class Employee extends React.Component {
  
    render () {


        return(
            <>
             <Ca/>
            </>
        ) ;
    }
}

ReactDom.render(<Employee/>,document.getElementById('root'))

 