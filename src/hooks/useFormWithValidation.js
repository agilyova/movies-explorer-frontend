import React, { useCallback } from "react";

export function useFormWithValidation(initialState) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: e.target.type === "checkbox" ? checked : value,
    }));
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const updateErrorMessage = (e, name, message) => {
    setErrors({ ...errors, [name]: message });
  };

  const checkValidity = (e) => {
    e.preventDefault();
    const err = {};
    e.target.querySelectorAll("input").forEach((input) => {
      err[input.name] = input.validationMessage;
      setErrors(err);
    });
  };

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    checkValidity,
    updateErrorMessage,
  };
}
