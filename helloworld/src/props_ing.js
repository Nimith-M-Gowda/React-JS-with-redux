import React from 'react'
import pt from 'prop-types'

function props_ing({name}) {
    
    return (
        <>
            <p>My name is {name}</p>
            <p>Hai</p>
        </>
    )
}
props_ing.propTypes = {
    name:pt.string,
}

export default props_ing
