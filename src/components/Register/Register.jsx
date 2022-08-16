import "./Register.css";
import React, { useEffect } from "react";

import PageWithForm from "../PageWithForm/PageWithForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Register({ handleRegistration, errorMessage, setErrorMessage }) {
  const controls = useFormWithValidation({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    errorMessage && setErrorMessage("");
  }, [controls.values.email]);

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
          required
          value={controls.values.name}
          onChange={controls.handleChange}
          minLength={2}
          maxLength={30}
          pattern={"[а-яА-ЯёЁa-zA-z- ]*"}
          errorMessage={controls.errors.name}
        ></Input>
        <Input
          type="email"
          name="email"
          label="E-mail"
          required={true}
          value={controls.values.email}
          onChange={controls.handleChange}
          errorMessage={controls.errors.email}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Пароль"
          required={true}
          value={controls.values.password}
          onChange={controls.handleChange}
          minLength={5}
          errorMessage={controls.errors.password}
        ></Input>
        <ErrorMessage errorMessage={errorMessage} />
        <SubmitButton
          label="Зарегистрироваться"
          isDisabled={!controls.isValid}
        />
      </Form>
    </PageWithForm>
  );
}

export default Register;
