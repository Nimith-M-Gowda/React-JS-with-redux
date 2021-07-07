import React from 'react'
import {Card,Button, CardDeck} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
class GetCard extends React.Component{
    constructor (props) {
        super (props);
    }
    render(){
        return (
            <>

 <Card>
    <Card.Img variant="top" src={this.props.src} />
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
      {this.props.text}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Want to Book</small>
    </Card.Footer>
  </Card>




            </>
        );
    }
}
export default GetCard