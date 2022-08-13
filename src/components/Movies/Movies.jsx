import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import React from "react";

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

  const defaultValues = {};

  const [isFirstSearch, setIsFirstSearch] = useState(true);

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

  useEffect(() => {
    getMovies();
  }, [isFirstSearch]);

  useEffect(() => {
    setIsLoading(false);
    setPagination(true);
    setVisibleMovies(searchResult.slice(0, defaultValues.startTotal));
  }, [searchResult]);

  useEffect(() => {
    if (searchResult.length <= visibleMovies.length) {
      setPagination(false);
    }
  }, [visibleMovies]);

  const handleSearch = (query) => {
    setIsLoading(true);
    setIsFirstSearch(false);
    const result = onSearch(query, movies);
    setSearchResult(result);
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
      searchResult.slice(0, prev.length + defaultValues.increment)
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
          <h2>Ничего не найдено</h2>
        )}
      </MoviesCardList>
    </>
  );
}

export default Movies;
