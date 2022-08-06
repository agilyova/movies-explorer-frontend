import "./SearchForm.css";
import React, { useState } from "react";
import PageSection from "../PageSection/PageSection";

import iconSearchInput from "../../images/search-input-icon.svg";
import ToggleButton from "../ToggleButton/ToggleButton";

function SearchForm() {
  const [inputValues, setInputValues] = useState({
    search: localStorage.getItem("searchValue") || "",
    shortFilms: localStorage.getItem("shortFilms") === "true",
  });

  const handleInputValuesChange = (e) => {
    const { name, value, checked } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: e.target.type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("searchValue", inputValues.search);
    localStorage.setItem("shortFilms", inputValues.shortFilms);
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
            onSubmit={handleFormSubmit}
          >
            <input
              className="search-panel__input"
              name="search"
              type="text"
              placeholder="Фильм"
              value={inputValues.search}
              onChange={handleInputValuesChange}
            />
            <button className="button search-panel__button" type="submit" />
          </form>

          <ToggleButton
            name="shortFilms"
            label="Короткометражки"
            state={inputValues.shortFilms}
            handleValueChange={handleInputValuesChange}
          />
        </div>
      </div>
    </PageSection>
  );
}

export default SearchForm;
