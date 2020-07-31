import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.scss';
import data from './data.jpg';


class View extends React.Component {
  
  likePost() {
    this.setState(() => ({
      likes: this.props.state.likes + 1
    }))
  }
  

  buildPost() {
    return this.props.posts.map((spam) => (
      <Card key={spam.id}
        bg="light"
        style={{ width: '22rem' }}
        className="mb-2"
        border="dark"
        text="muted"
      >
        <Card.Body>
          <Card.Title>{spam.username}</Card.Title>
          <Card.Text>{spam.text}</Card.Text>
          <img src={data} alt="Person resembling but not legally related to Data from Star Trek, which is the DataRetentionCorp mascot." height="20px" width="20px"></img>
          {"  "}{spam.likes} data
          
          <Button onClick={this.likePost()} >
          Like
          </Button>
          
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