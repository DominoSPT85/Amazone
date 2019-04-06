import React from 'react';
import { Table, Label, } from 'semantic-ui-react';


const Product = ({ name, descirption, price, inStock}) => (
  <Table.Row>
    <Table.Cell>{name} </Table.Cell>
    <Table.Cell>{descirption}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell>{inStock}</Table.Cell>
  </Table.Row>

)

export default Product; 