import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import cards from "../../utils/cards.json";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {};

  function setDefaultValues() {
    if (window.innerWidth >= 1000) {
      defaultValues.startTotal = 12;
      defaultValues.increment = 3;
      return;
    }
    if (window.innerWidth >= 768) {
      defaultValues.startTotal = 8;
      defaultValues.increment = 2;
    } else {
      defaultValues.startTotal = 5;
      defaultValues.increment = 1;
    }
  }
  setDefaultValues();
  console.log(defaultValues);

  return (
    <>
      <SearchForm />
      <MoviesCardList name="movies" pagination={true}>
        {isLoading ? (
          <Preloader />
        ) : (
          cards.map((card) => {
            return (
              <MoviesCard
                type="movies"
                isSaved={Math.random() < 0.5} /*для верстки*/
                key={card.id}
                name={card.nameRU}
                duration={card.duration}
                preview={card.image.formats.thumbnail.url}
                trailerLink={card.trailerLink}
              />
            );
          })
        )}
      </MoviesCardList>
    </>
  );
}

export default Movies;
