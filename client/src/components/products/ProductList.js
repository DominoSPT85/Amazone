import React from 'react';
import { Table } from 'semantic-ui-react';
import Product from './Product';

const ProductList = ({ productList }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>In Stock</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        productList.map( product => (
          <Product key={product.id} {...product} />
        ))
      }
    </Table.Body>
  </Table>
)

export default ProductList