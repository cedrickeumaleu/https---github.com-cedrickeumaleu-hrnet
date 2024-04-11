import React from 'react';
import ListEployees from '../components/listEmployees';
import { Link } from 'react-router-dom';


function EmployeeList() {
 
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <ListEployees/>
      <Link to={"/"}> Home</Link>
    </div>
  );
}

export default EmployeeList;
