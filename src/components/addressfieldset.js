import React from "react";
import { states } from "../datas/paysData"; // Importez la liste des états

function AddressFieldset({ onAddressChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Appelez la fonction de mise à jour de l'adresse dans le composant parent
    onAddressChange(name, value);
  };

  return (
    <fieldset className="address">
      <legend>Address</legend>

      <label htmlFor="street">Street</label>
      <input id="street" type="text" name="street" onChange={handleChange} />

      <label htmlFor="city">City</label>
      <input id="city" type="text" name="city" onChange={handleChange} />

      <label htmlFor="state">State</label>
      <select id="state" name="state" onChange={handleChange}>
        {/* Mapper la liste des états pour créer des options */}
        {states.map((state) => (
          <option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>

      <label htmlFor="zip-code">Zip Code</label>
      <input
        id="zip-code"
        type="number"
        name="zipCode"
        onChange={handleChange}
      />
    </fieldset>
  );
}

export default AddressFieldset;
