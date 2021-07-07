import React from 'react';

function Users (props) {
    return (
        <>
        <h3>Hello User welcome to your Dashboard</h3>
        <ol>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ol>
        <button onClick = {props.logouthandler}> LOG OUT </button>
        </>
    );
}

export default Users