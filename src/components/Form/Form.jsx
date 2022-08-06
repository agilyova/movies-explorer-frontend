import "./Form.css";
import React from "react";

function Form({ onSubmit, children }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
