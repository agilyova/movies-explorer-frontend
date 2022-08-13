import "./Profile.css";
import React, { useContext } from "react";
import PageContent from "../PageContent/PageContent";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

function Profile({
  handleLogOut,
  handleProfileUpdate,
  isActiveForUpdate,
  handleEdit,
  profileErrorMessage,
}) {
  const currentUser = useContext(CurrentUserContext);

  const controls = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });

  const inputDisabled = !isActiveForUpdate;
  const errorMessageClassName = `profile__error-message${
    profileErrorMessage && isActiveForUpdate
      ? " profile__error-message_visible"
      : ""
  }`;

  const handleEditProfile = (e) => {
    e.preventDefault();
    handleEdit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileUpdate(controls.values);
  };

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
            disabled={inputDisabled}
            required={true}
            value={controls.values.name}
            onChange={controls.handleChange}
          />
        </label>
        <label className="profile__input-label">
          E-mail
          <input
            name="email"
            className="profile__input"
            type="email"
            required={true}
            disabled={inputDisabled}
            value={controls.values.email}
            onChange={controls.handleChange}
          />
        </label>
        <span className={errorMessageClassName}>{profileErrorMessage}</span>
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
            disabled={profileErrorMessage}
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
