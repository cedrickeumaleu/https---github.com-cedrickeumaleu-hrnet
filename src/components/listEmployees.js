import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/employeeContext";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ListEployees() {
  const { employees } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState(""); //filtré les utilisateurs
  const [perPage, setPerPage] = useState(10); // Nombre d'utilisateurs par page
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  // const [formData, setFormData] = useState({}); // Données de l'employé à sauvegarder

  // Filtrage des employés en fonction du terme de recherche
  const filteredEmployees = employees.filter(
    (employee) =>
      (employee.firstName &&
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (employee.lastName &&
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (employee.department &&
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(filteredEmployees.length / perPage);

  // Fonction pour passer à la page précédente
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Fonction pour passer à la page suivante
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Fonction pour changer la page directement
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fonction pour gérer les changements dans le champ de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Réinitialisation de la page à la première page lors du changement de recherche
  };

  // Fonction pour gérer les changements dans le sélecteur de nombre d'entrées par page
  const handlePerPageChange = (event) => {
    setPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Réinitialisation de la page à la première page lors du changement du nombre d'entrées par page
  };

  const startIndex = (currentPage - 1) * perPage + 1; // Index de départ pour l'affichage actuel
  const endIndex = Math.min(startIndex + perPage - 1, filteredEmployees.length);

  // Génère les boutons pour chaque numéro de page
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} variant="secondary" onClick={() => goToPage(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <div className="titleForm">
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form.Group>
        <Form.Group className="shopage" controlId="perPageForm">
          <Form.Label>Show</Form.Label>
          <select as="select" value={perPage} onChange={handlePerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <Form.Label>entries</Form.Label>
        </Form.Group>
      </div>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">Department</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.slice(0, perPage).map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.address.street}</td>
              <td>{employee.address.city}</td>
              <td>{employee.address.state}</td>
              <td>{employee.address.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="footertable">
        <div>
          Showing {startIndex} to {endIndex} of {filteredEmployees.length}{" "}
          entries
        </div>

        <div className="currentpage">
          {/* Bouton "Précédent" */}
          <button
            variant="secondary"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>{" "}
          {/* Boutons de pagination */}
          {renderPageButtons()}
          {/* Bouton "Suivant" */}
          <button
            variant="secondary"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListEployees;
