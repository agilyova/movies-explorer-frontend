import "./Login.css";
import React, { useState } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "../../hooks/useForm";

function Login({ handleLogin }) {
  const controls = useForm({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(controls.values.email, controls.values.password);
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
          value={controls.values.email}
          onChange={controls.handleChange}
          onBlur={checkValidity}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Пароль"
          required={true}
          value={controls.values.password}
          onChange={controls.handleChange}
        ></Input>
        <SubmitButton label="Войти" />
      </Form>
    </PageWithForm>
  );
}

export default Login;
