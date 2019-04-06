import React, { Component } from 'react';
import DepartmentList from './departments/DepartmentList';
import DepartmentForm from './departments/DepartmentForm';
// import Department from './departments/Derpartment'
import axios from 'axios';
import { Container } from 'semantic-ui-react';


class Home extends Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addDepartment = (department) => {
    axios.post('/api/departments', { department })
    .then( res => {
      const { departments } = this.state;
      this.setState({ departments: [...departments, res.data] });
    })
    .catch( err => {
      console.log(err);
    })
  }

  updateDepartment = (id) => {
    axios.put(`/api/departments/${id}`)
    .then( res => {
      const { departments } = this.state.departments.map( d => {
      if (d.id === id)
        return res.data;
      return d;
    });
    this.setState({ departments, });
  })

  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      const { departments } = this.state;
      this.setState({ departments: departments.filter(d => d.id !== id) })
    })
    .catch( err => {
      console.log(err);
    })
  }


  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <DepartmentForm addDepartment={this.addDepartment} />
        <br />
        <br />
        <DepartmentList
          departments={this.state.departments}
          updateDepartment={this.updateDepartment}
          deleteDepartment={this.deleteDepartment}
        />
      </Container>
    );
  }
}
export default Home 