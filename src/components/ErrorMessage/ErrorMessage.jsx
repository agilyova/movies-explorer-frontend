import "./ErrorMessage.css";
import React from "react";

function ErrorMessage({ errorMessage }) {
  const errorMessageClassName = `error-message ${
    errorMessage ? "error-message_visible" : ""
  }`;

  return <span className={errorMessageClassName}>{errorMessage}</span>;
}

export default ErrorMessage;
