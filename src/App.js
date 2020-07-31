import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './App.scss';
import Add from './NewPost';
import View from './DisplayPosts';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [{
        id: 1,
        username: "admin",
        text: "This website is very fun! I shall place all my data into it. Let us connect with friends",
        likes: 0
      },
      {
        id: 2,
        username: "nimda",
        text: "I agree with admin! I shall place all my data into this fun website. Let us connect with friends",
        likes: 0
      }
      ],

    }
  }

  addNewPost(id, username, text, likes) {
    const newPost = { id, username, text, likes }
    this.setState((state) => ({
      posts: state.posts.concat(newPost)
    }))
  }



  render() {
    return (
      <>
        <Router>

          <Navbar bg="light" expand="md">
            <Navbar.Brand>HappyFun Social Data Site!</Navbar.Brand>
            <Navbar.Toggle aira-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/feed">Feed of Posts Data</Link></Nav.Link>
                <Nav.Link><Link to="/new-post">Place Data into New Post</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container>
            <Switch>

              <Route path="/feed">
                <Card>
                  <View posts={this.state.posts} />
                </Card>
              </Route>

              <Route path="/new-post">
                <Add onSubmit={(id, username, text, likes) => this.addNewPost(id, username, text, likes)} />
              </Route>

            </Switch>
          </Container>
        </Router>
      </>
    )
  }
}

export default App;