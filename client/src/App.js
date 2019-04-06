import React, { Component } from 'react';
import './App.css';
import ProductForm from './components/products/ProductForm';
import { Button, } from 'semantic-ui-react';

class App extends Component {


  onChange = change => {
    this.setState({
    });
  };

  render() {
    return (
     <div>
      <ProductForm onChange={change => this.onChange(change)} />

     </div>
      
    )
  }
}

export default App;
