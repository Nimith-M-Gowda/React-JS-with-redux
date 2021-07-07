import React from 'react';

let Hoc = (Oldcomponent , givenincr) => {
    class Newcomponent extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                count : 0,
            }
        }
        countincrement = () => {
            this.setState({count : this.state.count + givenincr})
        }
        render () {
            return(
                <>
                <Oldcomponent
                count = {this.state.count}
                countincrement = {this.countincrement}
                {...this.props}
                />
                </>
            );
        }
    } 

    return Newcomponent ;
}

export default Hoc