import React from 'react';


function Guest (props) {
    return (
        <>
        <h2>Hello Guest Welcome to Page</h2>
        <ol>
            <li>Product 1</li>
        </ol>
        <button onClick = {props.loginhandler}> LOG IN </button>
        </>
    );
}

export default Guest