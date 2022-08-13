import React from "react";

export function useForm(initialState) {
  const [values, setValues] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: e.target.type === "checkbox" ? checked : value,
    }));
  };

  return {values, handleChange, setValues};
}