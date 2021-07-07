import React from 'react' ;
import ReactDOM from 'react-dom'

function ReportsHOC (inputcomponent , inputdata){

return class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            columns : inputdata.columns ,
            header : inputdata.heder ,
        }
    }

    componentDidMount(){
        fetch(inputdata.url)
        .then (res => res.json())
        .then (res => this.setState({data : res}))
    }

    render () {
        return (
            <>
            <Data data = {this.state}></Data>
            </>
        )
    }
}

}

class Data extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
            return (
                <>
                    <div>
                        <h1>{this.props.data.header}</h1>
                    </div>                 

                    <div>
                        <table>
                            <tr>
                                {this.props.data.columns.map( c => <th>{c} </th>)}
                            </tr>
                            <tbody>
                                    {this.props.data.data.map(r => (
                                        <tr key = {r.id}>
                                                
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )
    }
}








