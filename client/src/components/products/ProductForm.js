import React from "react";

export default class Form extends React.Component {
  state = {
    name: "",
    description: "",
    price: "",
    inStock: "",
  };

  componentDidMount() {
    if (this.props.id) {
      const { name, description, price, inStock } = this.props
      this.setState({ name, description, price, inStock })
    } 
  }

  change = e => {
    // const { name, description, price, stock } = e.target
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      name: "",
      description: "",
      price: "",
      inStock: "",
    });
    this.props.onChange({
      name: "",
      description: "",
      price: "",
      inStock: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="name"
          placeholder="Name of product"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="price"
          placeholder="Price"
          value={this.state.price}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="inStock"
          placeholder="In stock"
          value={this.state.inStock}
          onChange={e => this.change(e)}
        />
        <br />

        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

