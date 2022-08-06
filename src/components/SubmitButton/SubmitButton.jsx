import "./SubmitButton.css";
import React from "react";

function SubmitButton({ label }) {
  return (
    <button type="submit" className="button submit-button">
      {label}
    </button>
  );
}

export default SubmitButton;
