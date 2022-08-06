import "./Register.css";
import React from "react";

import PageWithForm from "../PageWithForm/PageWithForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useState } from "react";

function Register() {
  const [inputValues, setInputValues] = useState({
    name: "",
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

  console.log(inputValues);

  return (
    <PageWithForm
      name="register"
      title="Добро пожаловать!"
      captionText="Уже зарегистрированы?"
      linkText="Войти"
      linkPath="/signin"
    >
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="name"
          label="Имя"
          autoFocus={true}
          required={true}
          value={inputValues.name}
          onChange={handleInputValuesChange}
        ></Input>
        <Input
          type="email"
          name="email"
          label="E-mail"
          required={true}
          value={inputValues.email}
          onChange={handleInputValuesChange}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Пароль"
          required={true}
          value={inputValues.password}
          onChange={handleInputValuesChange}
        ></Input>
        <SubmitButton label="Зарегистрироваться" />
      </Form>
    </PageWithForm>
  );
}

export default Register;
