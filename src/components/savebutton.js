import React from "react";

function SaveButton({ onSave }) {
  const handleClick = () => {
    // Appeler la fonction de sauvegarde fournie en prop
    onSave();
  };

  return <button onClick={handleClick}>Save</button>;
}

export default SaveButton;
