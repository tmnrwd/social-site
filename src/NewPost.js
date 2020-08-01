import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 3,
      username: "",
      text: "",
      likes: 0
    }

    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
    toastr.clear();

  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState)
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.id, this.state.username, this.state.text, this.state.likes);
    toastr.success("You posted a post!")
    this.setState({
      id: this.state.id + 1,
      username: "",
      text: "",
      likes: 0
    })
  }

//need to change id in submitHandler after each post is posted.

  render() {
    return (
      <>
      <br></br>
        <Form onSubmit={(e) => this.submitHandler(e)}>
          <Form.Group controlId="username">
            <Form.Label>enter your user name. Mervyn, insert GDPR statement here</Form.Label>
            <Form.Control name="username" type="text" value={this.state.username} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label>enter your valuable post content data here, you are not being tracked in any wa</Form.Label>
            <Form.Control name="text" type="text" value={this.state.text} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit*
          </Button>
          <br></br>
          *I agree that DataRetentionCorp owns all data I have provided in the above boxes in perpetuity
        </Form>
      </>
    );
  }

}
export default Add;