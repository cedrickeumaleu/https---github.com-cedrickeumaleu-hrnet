import React, { createContext, useState } from "react";

//création du context
const EmployeeContext = createContext();

//création du provider du context
const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]); // l'état des employés

  //sauvégade des données de l'employé
  const [formData, setFormData] = useState({
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
  });

  //ajour des données en interaction avec l'etat
  const addEmployee = (employeeData) => {
    setEmployees([...employees, employeeData]);
    setFormData({
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
    });
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, formData, setFormData }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
