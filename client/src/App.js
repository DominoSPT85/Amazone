import React from 'react';
import DepartmentList from './components/departments/DepartmentList';
import Department from './components/departments/Department';
import ProductList from './components/products/ProductList';
import Product from './components/products/Product';
import Home from './components/Home'
import { Container } from 'semantic-ui-react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/shared/Login';
import Register from './components/shared/Register';
import ProtectedRoute from './components/shared/ProtectedRoute';
import DepartmentForm from './components/departments/DepartmentForm';
import FetchUser from './components/shared/FetchUser';
import ProductForm from './components/products/ProductForm';

const App = () => (
  <>
    <Navbar />
     <FetchUser> 
       <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/new-department" component={DepartmentForm} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/departments/:id" component={Department} />
          <Route exact path="/department/:id/products" component={ProductList} />
          {/* <React exact path="/department/:id/products/:id" component={ViewProduct} /> */}
          <Route exact path="/product/addProduct" component={ProductForm} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      </FetchUser> 
  </>
);


export default App;