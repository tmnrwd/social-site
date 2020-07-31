import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      id: 1,
      username: "tim",
      text: "omg I forgot about my coding homework!!!",
      likes: 0
    }
  }

  submitHandler(event) {
    event.preventDefault();
    this.onSubmit(this.state.id, this.state.username, this.state.text, this.state.likes);
    this.setState({
      id: 1,
      username: "tim",
      text: "omg I forgot about my coding homework!!!",
      likes: 0
    })
  }

  updateListItems(id, username, text, likes) {
    const newPost = { id, username, text, likes }
    this.setState((state) => ({
      posts: state.posts.concat(newPost)
    }),() => localStorage.setItem("list", JSON.stringify(this.state.posts))
    )
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    /*}
    if (event.target.name === 'completed'){
      newState[event.target.name] = !this.state.completed;
    } else 
  */
    this.setState(newState)
  }

  buildRows() {
    return this.posts.map((current) => (
      <Card>
        <tr key={current.id}>
          <td>
            {current.username}
          </td>
          <td>
            {current.text}
          </td>
          <td>
            {current.likes}
          </td>
        </tr>
      </Card>
    )
    )
  }

  render() {
    return (
      <>
        <Card>
          <p>{this.state.username}</p>
          <p>{this.state.text}</p>
       Likes: <p>{this.state.likes}</p>
        </Card>
        <Table>
         {/* <body>
            {this.buildRows()}
          </body> */}
        </Table>

        <p>Adding new posts:</p>

        <Form onSubmit={(e) => this.submitHandler(e)}>
          <Form.Group controlId="postID">
            <Form.Label>Post ID</Form.Label>
            <Form.Control name="id" type="number" value={this.state.id} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="username">
            <Form.Label>User Name</Form.Label>
            <Form.Control name="username" type="text" value={this.state.username} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label>Post Content</Form.Label>
            <Form.Control name="text" type="text" value={this.state.text} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
        </Button>

        </Form>
      </>
    )
  }
}

export default App;