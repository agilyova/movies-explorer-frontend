import "./Profile.css";
import React, { useState } from "react";
import PageContent from "../PageContent/PageContent";

function Profile() {
  const [isActiveForEdit, setIsActiveForEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputDisabled = `${!isActiveForEdit ? "disabled" : ""}`;
  const errorMessageClassName = `profile__error-message${
    errorMessage && isActiveForEdit ? " profile__error-message_visible" : ""
  }`;

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsActiveForEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsActiveForEdit(false);
  };

  return (
    <PageContent name="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__input-label">
          Имя
          <input
            className="profile__input"
            type="text"
            disabled={inputDisabled}
            required={true}
            ref={(input) => input && input.focus()}
          />
        </label>
        <label className="profile__input-label">
          E-mail
          <input
            className="profile__input"
            type="email"
            required={true}
            disabled={inputDisabled}
          />
        </label>
        <span className={errorMessageClassName}>{errorMessage}</span>
        {!isActiveForEdit ? (
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
            disabled={errorMessage ? `true` : ""}
          >
            Сохранить
          </button>
        )}
      </form>
      {!isActiveForEdit && (
        <button className="link profile__cancel-link">Выйти из аккаунта</button>
      )}
    </PageContent>
  );
}

export default Profile;
