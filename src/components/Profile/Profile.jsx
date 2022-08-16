import "./Profile.css";
import React, { useContext, useEffect } from "react";
import PageContent from "../PageContent/PageContent";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Profile({
  handleLogOut,
  handleProfileUpdate,
  isActiveForUpdate,
  setIsActiveForUpdate,
  successMessage,
  setSuccessMessage,
  handleEdit,
  profileErrorMessage,
  setProfileErrorMessage,
}) {
  const currentUser = useContext(CurrentUserContext);

  const controls = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });

  const errorServerMessageClassName = `profile__error-message profile__error-message_type_server${
    profileErrorMessage && isActiveForUpdate
      ? " profile__error-message_visible"
      : ""
  }`;

  const errorMessageClassName1 = `profile__error-message${
    isActiveForUpdate ? " profile__error-message_visible" : ""
  }`;

  const successMessageClassName = `profile__success-message ${
    successMessage ? "profile__success-message_visible" : ""
  }`;

  const isButtonDisabled =
    !controls.isValid ||
    profileErrorMessage ||
    (controls.values.name === currentUser.name &&
      controls.values.email === currentUser.email);

  const handleEditProfile = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    handleEdit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileUpdate(controls.values);
  };

  useEffect(() => {
    setProfileErrorMessage("");
  }, [controls.values]);

  useEffect(() => {
    setIsActiveForUpdate(false);
    setSuccessMessage("");
    setProfileErrorMessage("");
  }, []);

  return (
    <PageContent name="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__input-label">
          Имя
          <input
            name="name"
            className="profile__input"
            type="text"
            disabled={!isActiveForUpdate}
            required={true}
            minLength={2}
            maxLength={30}
            pattern={"[а-яА-ЯёЁa-zA-z- ]*"}
            value={controls.values.name || ""}
            onChange={controls.handleChange}
          />
        </label>
        <span className={errorMessageClassName1}>{controls.errors.name}</span>
        <label className="profile__input-label">
          E-mail
          <input
            name="email"
            className="profile__input"
            type="email"
            required={true}
            disabled={!isActiveForUpdate}
            value={controls.values.email}
            onChange={controls.handleChange}
          />
        </label>
        <span className={errorMessageClassName1}>{controls.errors.email}</span>
        <span className={successMessageClassName}>{successMessage}</span>
        <span className={errorServerMessageClassName}>
          {profileErrorMessage}
        </span>
        {!isActiveForUpdate ? (
          <button
            className="link profile__edit-link"
            onClick={handleEditProfile}
          >
            Редактировать
          </button>
        ) : (
          <button
            className="button profile__submit-button"
            type="submit"
            disabled={isButtonDisabled}
          >
            Сохранить
          </button>
        )}
      </form>
      {!isActiveForUpdate && (
        <button className="link profile__cancel-link" onClick={handleLogOut}>
          Выйти из аккаунта
        </button>
      )}
    </PageContent>
  );
}

export default Profile;
