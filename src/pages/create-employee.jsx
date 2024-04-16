import React from 'react';
import Title from '../components/title'
import EmployeeForm from '../components/employeeform';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="container">
            <Title />
            <Link to={"/employee-list"}>View Current Employees</Link>
            <h2>Create Employee</h2>
            <EmployeeForm/>          
        </div>
    );
}

export default Home;