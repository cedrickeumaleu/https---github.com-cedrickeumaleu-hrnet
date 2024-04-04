import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./contexts/employeeContext";
import Home from "./pages/home";
import EmployeeList from "./pages/employee-list";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </EmployeeProvider>
    </BrowserRouter>
  );
}

export default App;
