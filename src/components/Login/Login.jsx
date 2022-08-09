import "./Login.css";
import React, { useState } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";

function Login() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleInputValuesChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const checkValidity = (e) => {
    console.log(e.target.validity);
  };

  return (
    <PageWithForm
      name="login"
      title="Рады видеть!"
      captionText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkPath="/signup"
    >
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="email"
          name="email"
          label="E-mail"
          autoFocus={true}
          required={true}
          value={inputValues.email}
          onChange={handleInputValuesChange}
          onBlur={checkValidity}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Пароль"
          required={true}
          value={inputValues.password}
          onChange={handleInputValuesChange}
        ></Input>
        <SubmitButton label="Войти" />
      </Form>
    </PageWithForm>
  );
}

export default Login;
