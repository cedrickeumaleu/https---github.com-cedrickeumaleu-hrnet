import React, { useState, useContext } from "react";
import EmployeeForm from "../components/employeeform";
import Modal from "../components/modal";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../contexts/employeeContext";

function Container() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addEmployee } = useContext(EmployeeContext);

  // Fonction de sauvegarde des données de l'employé
  const saveEmployeeData = (employeeData) => {
    addEmployee(employeeData); // Ajouter les données de l'employé en utilisant le contexte
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Fermer le modal de confirmation
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <Link to={"/employee-list"}>View Current Employees</Link>
      <h2>Create Employee</h2>
      <EmployeeForm onSubmit={saveEmployeeData} />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default Container;
