import React from 'react';
import { Route, } from 'react-router-dom';
import DepartmentList from './components/departments/DepartmentList';
import Department from './components/departments/Derpartment';
import ProductList from './components/products/ProductList';
import Product from './components/products/Product';

const App = () => (
  <>
    <Route exact path="/" component={DepartmentList} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/departments/:id" component={Department} />
    <Route exact path="/department/:id/products" component={ProductList} />
    <React exact path="/department/:id/products/:id" component={ViewProduct} />

    <Route component={NoMatch} />
  </>
);

export default App;