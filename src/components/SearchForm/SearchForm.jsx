import "./SearchForm.css";
import React, { useEffect } from "react";
import PageSection from "../PageSection/PageSection";

import iconSearchInput from "../../images/search-input-icon.svg";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function SearchForm({
  onSearch,
  initialSearchQueryValues,
  searchWordRequiered,
}) {
  const controls = useFormWithValidation({
    nameRU:
      initialSearchQueryValues !== undefined
        ? initialSearchQueryValues.nameRU
        : "",
    shortFilms:
      initialSearchQueryValues !== undefined
        ? initialSearchQueryValues.shortFilms
        : "",
  });

  useEffect(
    (e) => {
      if (controls.errors.nameRU) {
        controls.updateErrorMessage(e, "nameRU", "Нужно ввести ключевое слово");
      }
    },
    [controls.errors.nameRU]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (
      searchWordRequiered &&
      !controls.isValid &&
      controls.values.nameRU.length === 0
    ) {
      controls.checkValidity(e);
      controls.updateErrorMessage(e, "nameRU", "Нужно ввести ключевое слово");
      return;
    }
    onSearch(controls.values);
  };

  return (
    <PageSection name="search-form">
      <div className="search-panel__wrapper-for-divider">
        <div className="search-panel">
          <img
            className="search-panel__icon"
            src={iconSearchInput}
            alt="Иконка лупы"
          />
          <form
            className="search-panel__form"
            action=""
            onSubmit={handleSearch}
            noValidate
          >
            <div className="search-panel__form-wrapper">
              <input
                className="search-panel__input"
                name="nameRU"
                type="text"
                placeholder="Фильм"
                value={controls.values.nameRU}
                onChange={controls.handleChange}
                required={searchWordRequiered}
              />
              <button className="button search-panel__button" type="submit" />
            </div>
            <ToggleButton
              name="shortFilms"
              label="Короткометражки"
              state={controls.values.shortFilms}
              handleValueChange={controls.handleChange}
              handleShortFilmsSearch={handleSearch}
            />
          </form>
        </div>
        <ErrorMessage errorMessage={controls.errors.nameRU} />
      </div>
    </PageSection>
  );
}

export default SearchForm;
