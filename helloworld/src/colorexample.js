import React from 'react';
import ReactDom from 'react-dom';

function Employee2 (props) {


    return (
        <>
        <h1 className = {props.wantcolor}>Helo Employee2</h1>
        </>
    );
}

ReactDom.render( <Employee2 />, document.getElementById('root'))

export default Employee2 