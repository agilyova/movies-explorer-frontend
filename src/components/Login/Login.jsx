import "./Login.css";
import React, { useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Login({ handleLogin, errorMessage, setErrorMessage }) {
  const controls = useFormWithValidation({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(controls.values.email, controls.values.password);
  };

  useEffect(() => {
    errorMessage && setErrorMessage("");
  }, [controls.values]);

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
          errorMessage={controls.errors.email}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Пароль"
          required={true}
          value={controls.values.password}
          onChange={controls.handleChange}
          errorMessage={controls.errors.password}
        ></Input>
        <ErrorMessage errorMessage={errorMessage} />
        <SubmitButton label="Войти" isDisabled={!controls.isValid} />
      </Form>
    </PageWithForm>
  );
}

export default Login;
