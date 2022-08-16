import "./Input.css";
import React from "react";

function Input({
  name,
  label,
  type,
  autoFocus,
  required,
  value,
  onChange,
  pattern,
  minLength,
  errorMessage,
}) {
  const inputClassName = `input ${errorMessage ? "input-error" : ""}`;
  const errorClassName = `input__error ${
    errorMessage ? "input__error_visible" : ""
  }`;

  return (
    <>
      <label className="label">
        {label}
        <input
          className={inputClassName}
          name={name}
          type={type}
          autoFocus={autoFocus}
          required={required}
          value={value || ""}
          pattern={pattern}
          onChange={onChange}
          minLength={minLength}
        />
      </label>
      <span className={errorClassName}>{errorMessage}</span>
    </>
  );
}

export default Input;
