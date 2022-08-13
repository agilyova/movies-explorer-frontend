import "./Register.css";
import React from "react";

import PageWithForm from "../PageWithForm/PageWithForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "../../hooks/useForm";

function Register({ handleRegistration }) {
  const controls = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRegistration(
      controls.values.name,
      controls.values.email,
      controls.values.password
    );
  };

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
          value={controls.values.name}
          onChange={controls.handleChange}
        ></Input>
        <Input
          type="email"
          name="email"
          label="E-mail"
          required={true}
          value={controls.values.email}
          onChange={controls.handleChange}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Пароль"
          required={true}
          value={controls.values.password}
          onChange={controls.handleChange}
        ></Input>
        <SubmitButton label="Зарегистрироваться" />
      </Form>
    </PageWithForm>
  );
}

export default Register;
