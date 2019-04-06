import React from "react";
import { Form, } from "semantic-ui-react";
import axios from 'axios';


class DepartmentForm extends React.Component {
  state = { title: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title}  = this.state
    axios.post('/api/departments', {title })
    .then( res => {
      this.props.history.push("/home")
    })
    .catch( err => {
      console.log(err);
    })
    this.setState({ title: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Title" 
            placeholder="Title" 
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default DepartmentForm;