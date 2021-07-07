import React, { Component } from 'react'
export default class form__handling extends Component {
   constructor(props) {
    super(props);
    this.state = {
        formhandler : {
            name : '',
            email : '',
            age : '',
        } ,
        submit_data : '',
        apidata: [] ,
    }
   }
    submithandler = (e) => {
        e.preventDefault();
        this.setState({submit_data:this.state.formhandler})
        // console.log(this.state.formhandler)
    }
     changehandler = (e) => {
         this.setState({formhandler : {...this.state.formhandler,[e.target.name]:e.target.value
         }})
   }
//    componentDidMount() {
       
//         let p = new Promise( (res,rej) => {
//             let f  = fetch('https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02')
//             res(f)
//             })
//         p
//         .then((r)=>{return r.json()})
//         .then(r => {return r.main})
//         .then(r => {
            
//             let g = Object.entries(r)
//             g.map((e,i) => {
//                 this.setState({apidata:[...this.state.apidata,e]})
//             });
//             console.log('this.state.apidata',this.state.apidata)
//         })  
//         .catch(new Error())
  // }
    render() {
        return (
            <>
            <center>
                <form onSubmit  = {this.submithandler}>
                    <label>NAME</label>
                    <input type = 'text' name = 'name' value = {this.state.formhandler.name || ''} onChange = {this.changehandler}/>
                    <label>EMAIL</label>
                    <input type = 'text' name = 'email' value = {this.state.formhandler.email || ''} onChange = {this.changehandler}/>
                    <label>AGE</label>
                    <input type = 'text' name = 'age' value = {this.state.formhandler.age || ''} onChange = {this.changehandler}/>
                    <input type = 'submit' value='submit'/>
                </form>
                </center>
        <h4>Finally submitted data is {JSON.stringify(this.state.submit_data)}</h4>
        {/* <h5>API data is {this.state.apidata}</h5> */}
            </>
        )
    }
}