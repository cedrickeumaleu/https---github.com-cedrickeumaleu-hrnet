import React, { useContext, useState } from "react";
import AddressFieldset from "../components/addressfieldset";
import { EmployeeContext } from "../contexts/employeeContext";
import MyDatePicker from "../components/date";
import DropdownMenu from "../components/dropdownMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "components-modal-modal";

function EmployeeForm() {
  const { addEmployee, formData, setFormData } = useContext(EmployeeContext);

  // const [formData, setFormData] = useState({ ...initialFormData });
  const [showModal, setShowModal] = useState(false);

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

  //gestion de validation  pour DateOfBirt
  const handleDateOfBirthChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: date.toISOString().split("T")[0],
    }));
  };

  // gestion de validation du startDate
  const handleStartDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      startDate: date.toISOString().split("T")[0], // Convertir la date en format ISO (YYYY-MM-DD)
    }));
  };

  const handleDepartmentChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      department: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.dateOfBirth && formData.startDate) {
      const birthDate = new Date(formData.dateOfBirth);
      const startDate = new Date(formData.startDate);
      if (birthDate >= startDate) {
        alert("Date of Birth must be before Start Date");
        return;
      }
    }
    addEmployee(formData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
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
        <MyDatePicker
          selected={formData.dateOfBirth}
          onDateChange={handleDateOfBirthChange}
        />

        <label htmlFor="start-date">Start Date</label>
        <MyDatePicker
          selected={formData.startDate}
          onDateChange={handleStartDateChange}
        />

        <AddressFieldset
          address={formData.address}
          onAddressChange={handleAddressChange}
        />

        <label htmlFor="department">Department</label>
        <DropdownMenu
          selectedOption={formData.department}
          onOptionChange={handleDepartmentChange}
        />
        <div className="form-button">
          <button type="submit">Save</button>
        </div>
      </form>

      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        message="Employee saved successfully!"
      />
    </>
  );
}

export default EmployeeForm;
