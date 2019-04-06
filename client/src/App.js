import React from 'react';
import { Route, } from 'react-router-dom';
import DepartmentList from './components/departments/DepartmentList';
import Department from './components/departments/Derpartment';
import ProductList from './components/products/ProductList';
import Product from './components/products/Product';
import Login from './components/shared/Login';
import Register from './components/shared/Register';
import ViewProduct from './components/products/ViewProduct';
import NoMatch from './components/NoMatch';


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