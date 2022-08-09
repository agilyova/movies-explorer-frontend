import "./Input.css";
import React from "react";

function Input({ name, label, type, autoFocus, required, value, onChange }) {
  const errorClassName = `input__error ${name}-input-error`;

  return (
    <>
      <label className="label">
        {label}
        <input
          className="input"
          name={name}
          type={type}
          autoFocus={autoFocus}
          required={required}
          value={value}
          onChange={onChange}
        />
      </label>
      <span className={errorClassName}>Что-то пошло не так</span>
    </>
  );
}

export default Input;
