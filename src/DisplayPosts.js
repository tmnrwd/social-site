import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.scss';
import data from './data.jpg';


class View extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    id: 0,
    username: "",
    text: "y",
    likes: 0
  }
}

  buildPost() {
    return this.props.posts.map((spam) => (
      <Card key={spam.id}
        bg="warning"
        style={{ width: '22rem' }}
        className="mb-2"
        border="dark"
        text="dark"
      >
        <Card.Body>
          <Card.Title>{spam.username}</Card.Title>
          <Card.Text>{spam.text}</Card.Text>
          
          
          <Button variant="dark" onClick={() => this.props.likesIncrease(spam.id)} >
          Like
          </Button>
          {" "}
          <img src={data} alt="Person resembling but not legally related to Data from the Star Trek, which is the DataRetentionCorp mascot." height="20px" width="20px"></img>
          {" "}{spam.likes} data
          </Card.Body>
      </Card>
    )
    )
  }
     
  render() {
    return (
      <>
        <Card>
          
          <Card.Body>
            {this.buildPost()}
            </Card.Body>
          </Card>
      </>
    );
  }

}

export default View;