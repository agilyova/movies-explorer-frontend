import "./App.css";

import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as mainApi from "../../utils/MainApi";
import * as movieApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [message, setMessage] = useState("");
  const [isActiveForUpdate, setIsActiveForUpdate] = useState(false);
  const [profileErrorMessage, setProfileErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const history = useHistory();

  const getUserInfo = () => {
    mainApi
      .getUser()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        setMovies([]);
        localStorage.clear();
      });
  };

  const getMovies = () => {
    movieApi
      .getAllMovies()
      .then((movies) => {
        movies.forEach((movie) => {
          movie.image.formats.thumbnail.url = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
          movie.image.url = `https://api.nomoreparties.co${movie.image.url}`;
        });
        setMovies(movies);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
    }
  }, [loggedIn]);

  const addMovieToSaved = (movie) => {
    mainApi.addMoviesToSaved(movie).then((movie) => {
      setSavedMovies([movie, ...savedMovies]);
    });
  };

  const deleteMovieFromSaved = (savedMovieId) => {
    mainApi.deleteFromSavedMovies(savedMovieId).then(() => {
      setSavedMovies((prevState) =>
        prevState.filter((item) => item._id !== savedMovieId)
      );
    });
  };

  const searchMovies = (query, moviesArray) => {
    return moviesArray.filter((movie) => {
      return (
        (query.shortFilms ? movie.duration <= 40 : true) &&
        (query.nameRU
          ? movie.nameRU.toLowerCase().includes(query.nameRU.toLowerCase())
          : true)
      );
    });
  };

  const onLogin = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((r) => {
        getUserInfo();
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };

  const onRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then(() => {
        onLogin(email, password);
      })
      .catch((res) => {
        setMessage(res.message);
        console.log(res);
      });
  };

  const onLogOut = () => {
    mainApi
      .logOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        setMovies([]);
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };

  const onProfileUpdate = (user) => {
    mainApi
      .updateUser(user)
      .then((user) => {
        setCurrentUser(user);
        setIsActiveForUpdate(false);
      })
      .catch((err) => {
        console.log("Request", err);
        setMessage(err.message);
        setProfileErrorMessage(err.message);
      });
  };

  const onProfileEdit = () => {
    setIsActiveForUpdate(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} />
        <main className="page__main-content">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute path="/movies" loggedIn={loggedIn}>
              <Movies
                movies={movies}
                onSearch={searchMovies}
                savedMovies={savedMovies}
                addMoviesToSaved={addMovieToSaved}
                deleteMovieFromSaved={deleteMovieFromSaved}
                getMovies={getMovies}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
              <SavedMovies
                onSearch={searchMovies}
                savedMovies={savedMovies}
                deleteMovieFromSaved={deleteMovieFromSaved}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                handleLogOut={onLogOut}
                handleProfileUpdate={onProfileUpdate}
                isActiveForUpdate={isActiveForUpdate}
                handleEdit={onProfileEdit}
                profileErrorMessage={profileErrorMessage}
              />
            </ProtectedRoute>
            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register handleRegistration={onRegister} />
              )}
            </Route>
            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login handleLogin={onLogin} />
              )}
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
