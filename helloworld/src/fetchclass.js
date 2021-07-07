import React from 'react';
import ReactDom from 'react-dom'



class Employee extends React.Component{
    constructor(props) {
            super(props);
            this.state = {
                data : null,
            }
    }
     componentDidMount() {
        
        let promise = new Promise((res,rej) => {
                     
            // https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02
            let response = fetch('https://cors-anywhere.herokuapp.com/http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript')
            
            res(response);
            
        })
        promise
               .then((res) => {return res.json()  })
               .then ((res) => {console.log(res)})
               .catch('error')
    }

    render() {
        return (
            <>
              data is {this.state.data}  
            </>
        );
    }
}

ReactDom.render(<Employee/>,document.getElementById('root'))