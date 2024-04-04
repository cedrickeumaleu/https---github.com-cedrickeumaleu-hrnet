import React, { useContext, useState } from "react";
import AddressFieldset from "../components/addressfieldset";
import { EmployeeContext } from "../contexts/employeeContext";
import MyDatePicker from "../components/date";

function EmployeeForm() {
  const { addEmployee } = useContext(EmployeeContext);
  // const [formData, setFormData] = useState({}); // Données de l'employé à sauvegarder

  const initialFormData = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  // Réinitialiser le formulaire après soumission
  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [fieldName]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData); // Add employee data to context
    resetForm(); // Réinitialiser les données du formulaire
  };

  // Fonction de sauvegarde des données de l'employé
  const handleSaveEmployee = () => {
    // Vérifiez si le formulaire est rempli correctement avant de sauvegarder
    if (
      formData.firstName &&
      formData.lastName &&
      formData.department &&
      formData.dateOfBirth &&
      formData.startDate &&
      formData.address &&
      formData.department
    ) {
      addEmployee(formData); // Ajoutez les données de l'employé au tableau d'employés
      setFormData({}); // Réinitialisez les données du formulaire après la sauvegarde
    } else {
      alert("Please fill out all required fields."); // Affichez un message d'erreur si des champs requis sont manquants
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <MyDatePicker selected={formData.dateOfBirth} />

      <label htmlFor="start-date">Start Date</label>
      <MyDatePicker selected={formData.startDate} />

      <AddressFieldset
        address={formData.address}
        onAddressChange={handleAddressChange}
      />

      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">Select Department</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>
      <div className="form-button">
        <button type="submit" onClick={handleSaveEmployee}>
          Save
        </button>
      </div>
    </form>
  );
}

export default EmployeeForm;
