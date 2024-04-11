import React, { useContext } from "react";
import AddressFieldset from "../components/addressfieldset";
import { EmployeeContext } from "../contexts/employeeContext";
import MyDatePicker from "../components/date";
import DropdownMenu from "../components/dropdownMenu";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployeeForm() {
  const { addEmployee, formData, setFormData } = useContext(EmployeeContext);

  // const [formData, setFormData] = useState({}); // Données de l'employé à sauvegarder

  // const initialFormData = {
  //   firstName: "",
  //   lastName: "",
  //   dateOfBirth: null,
  //   startDate: null,
  //   department: "",
  //   address: {
  //     street: "",
  //     city: "",
  //     state: "",
  //     zipCode: "",
  //   },
  // };

  // const [formData, setFormData] = useState({ ...initialFormData });
  // const [showModal, setShowModal] = useState(false);

  // Réinitialiser le formulaire après soumission
  // const resetForm = () => {
  //   setFormData(initialFormData);
  // };

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
    addEmployee(formData); // Add employee data to context
    // setFormData({ ...initialFormData }); // Réinitialiser les données du formulaire
  };

  // Fonction de sauvegarde des données de l'employé
  // const handleSaveEmployee = (e) => {
  //   e.preventDefault();
  //   // Vérifiez si le formulaire est rempli correctement avant de sauvegarder
  //   if (
  //     formData.firstName &&
  //     formData.lastName &&
  //     formData.department &&
  //     formData.dateOfBirth &&
  //     formData.startDate &&
  //     formData.address.city &&
  //     formData.address.state &&
  //     formData.address.street &&
  //     formData.address.zipCode
  //   ) {
  //     addEmployee(formData); // Ajoutez les données de l'employé au tableau d'employés
  //     setFormData({}); // Réinitialisez les données du formulaire après la sauvegarde
  //     // setShowModal(true); // Afficher la modal après avoir sauvegardé les données
  //   } else {
  //     alert("Please fill out all required fields."); // Affichez un message d'erreur si des champs requis sont manquants
  //   }
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

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

      {/* <Modal
        isOpen={showModal}
        onClose={closeModal}
        message="Employee saved successfully!"
      /> */}
    </>
  );
}

export default EmployeeForm;
