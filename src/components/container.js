// import React, { useContext } from "react";
// import EmployeeForm from "../components/employeeform";

// import { Link } from "react-router-dom";
// import { EmployeeContext } from "../contexts/employeeContext";

// function Container() {
//   const { addEmployee } = useContext(EmployeeContext);

//   // Fonction de sauvegarde des données de l'employé
//   const saveEmployeeData = (employeeData) => {
//     addEmployee(employeeData); // Ajouter les données de l'employé en utilisant le contexte
//   };

//   return (
//     <div className="container">
//       <Link to={"/employee-list"}>View Current Employees</Link>
//       <h2>Create Employee</h2>
//       <EmployeeForm onSubmit={saveEmployeeData} />
//     </div>
//   );
// }

// export default Container;
