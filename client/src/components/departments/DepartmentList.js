import React from 'react';
import Department from './Department';

const DepartmentList = ({ departments }) => (
  <ul>
    { departments.map( (title, index) => {
      return (
        <li key={index}>
          {title}
        </li>
      )
     })
    }
  </ul>
)

export default DepartmentList;