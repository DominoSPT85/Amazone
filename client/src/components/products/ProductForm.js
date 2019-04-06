import React, { Component } from 'react';

class ProductForm extends Component {
  state = { name: " ", description: " ", price: " ", stock: " ", }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

 

  render() {
    const { name } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name} 
          item="name" 
          onChange={this.handleChange} 
          required placeholder="List item" />
      </form>
    )
  }
}


export default ProductForm;