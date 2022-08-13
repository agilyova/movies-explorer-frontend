import "./SearchForm.css";
import React from "react";
import PageSection from "../PageSection/PageSection";

import iconSearchInput from "../../images/search-input-icon.svg";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useForm } from "../../hooks/useForm";

function SearchForm({ onSearch, initialSearchQueryValues }) {
  const controls = useForm({
    nameRU:
      initialSearchQueryValues !== undefined
        ? initialSearchQueryValues.nameRU
        : "",
    shortFilms:
      initialSearchQueryValues !== undefined
        ? initialSearchQueryValues.shortFilms
        : "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
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
          >
            <input
              className="search-panel__input"
              name="nameRU"
              type="text"
              placeholder="Фильм"
              value={controls.values.nameRU}
              onChange={controls.handleChange}
            />
            <button className="button search-panel__button" type="submit" />
          </form>

          <ToggleButton
            name="shortFilms"
            label="Короткометражки"
            state={controls.values.shortFilms}
            handleValueChange={controls.handleChange}
            handleShortFilmsSearch={handleSearch}
          />
        </div>
      </div>
    </PageSection>
  );
}

export default SearchForm;
