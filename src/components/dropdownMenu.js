import React, { useState } from "react";

function DropdownMenu({ selectedOption, onOptionChange }) {
  const [localSelectedOption, setLocalSelectedOption] =
    useState(selectedOption);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setLocalSelectedOption(value);
    onOptionChange(value);
  };

  return (
    <div className="select">
      <select value={localSelectedOption} onChange={handleSelectChange}>
        <option value="">Select Department</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>
    </div>
  );
}

export default DropdownMenu;
