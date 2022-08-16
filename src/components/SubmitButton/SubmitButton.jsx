import "./SubmitButton.css";
import React from "react";

function SubmitButton({ label, isDisabled }) {
  return (
    <button
      type="submit"
      className="button submit-button"
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}

export default SubmitButton;
