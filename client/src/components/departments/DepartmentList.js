import React from 'react';
import Department from './Department';
import axios from 'axios';

const DepartmentList = ({ departments, updateDepartment, deleteDepartment }) => (
  <ul>
    {departments.map(department =>
    <li>
      <Department
        key={department.id} {...department}
        updateDepartment={updateDepartment}
        deleteDepartment={deleteDepartment}
      />
    </li>
    )}
  </ul>
)
export default DepartmentList;