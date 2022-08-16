import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import React from "react";
import useBreakpoint from "../../hooks/useResize";

function Movies({
  movies,
  onSearch,
  savedMovies,
  addMoviesToSaved,
  deleteMovieFromSaved,
  getMovies,
}) {
  const initialSearchResultValue = localStorage.getItem("searchResult")
    ? JSON.parse(localStorage.getItem("searchResult"))
    : [];
  const initialSearchQueryValues = !localStorage.getItem("query")
    ? { nameRU: "", shortFilms: false }
    : JSON.parse(localStorage.getItem("query"));

  const [searchResult, setSearchResult] = useState(initialSearchResultValue);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [pagination, setPagination] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const cardListValues = useBreakpoint();

  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const searchResultText =
    isFirstSearch && localStorage.getItem("query") === null
      ? "Для поиска укажите ключевое слово"
      : "По вашему запросу ничего не найдено";

  /*  function setDefaultValues() {
    if (window.innerWidth >= 1000) {
      cardListValues.startTotal = 12;
      cardListValues.increment = 3;
      return;
    }
    if (window.innerWidth >= 768) {
      cardListValues.startTotal = 8;
      cardListValues.increment = 2;
    } else {
      cardListValues.startTotal = 5;
      cardListValues.increment = 1;
    }
  }
  setDefaultValues();*/

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setVisibleMovies(searchResult.slice(0, cardListValues.startTotal));
  }, [searchResult]);

  useEffect(() => {
    if (
      searchResult.length <= visibleMovies.length ||
      searchResult.length === 0
    ) {
      setPagination(false);
    } else {
      setPagination(true);
    }
  }, [searchResult, visibleMovies, searchResult.length, visibleMovies.length]);

  const handleSearch = (query) => {
    setIsLoading(true);
    setIsFirstSearch(false);
    const result = onSearch(query, movies);
    setSearchResult(result);
    setIsLoading(false);

    localStorage.setItem("searchResult", JSON.stringify(result));
    localStorage.setItem(
      "query",
      JSON.stringify({
        nameRU: query.nameRU,
        shortFilms: query.shortFilms,
      })
    );
  };

  const onLoadMore = () => {
    setVisibleMovies((prev) =>
      searchResult.slice(0, prev.length + cardListValues.increment)
    );
  };

  return (
    <>
      <SearchForm
        onSearch={handleSearch}
        movies={movies}
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        setIsLoading={setIsLoading}
        initialSearchQueryValues={initialSearchQueryValues}
        searchWordRequiered
      />

      <MoviesCardList
        name="movies"
        pagination={pagination}
        onLoadMore={onLoadMore}
      >
        {isLoading ? (
          <Preloader />
        ) : searchResult.length !== 0 ? (
          visibleMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                savedMovies={savedMovies}
                type="movies"
                movie={movie}
                preview={movie.image.formats.thumbnail.url}
                addMoviesToSaved={addMoviesToSaved}
                deleteMovieFromSaved={deleteMovieFromSaved}
              />
            );
          })
        ) : (
          <p className="movies__list-message">{searchResultText}</p>
        )}
      </MoviesCardList>
    </>
  );
}

export default Movies;
