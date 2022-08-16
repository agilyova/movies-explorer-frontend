import "./App.css";

import { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";

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
import AlertMessage from "../AlertMessage/AlertMessage";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isActiveForUpdate, setIsActiveForUpdate] = useState(false);
  const [profileErrorMessage, setProfileErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const history = useHistory();

  const location = useLocation();

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
        setErrorMessage(err.message);
        setAlertIsOpen(true);
      });
  };

  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setAlertIsOpen(true);
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

  useEffect(() => {
    errorMessage && setErrorMessage("");
    setAlertIsOpen(false);
  }, [location.pathname]);

  const addMovieToSaved = (movie) => {
    mainApi
      .addMoviesToSaved(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setAlertIsOpen(true);
      });
  };

  const deleteMovieFromSaved = (savedMovieId) => {
    mainApi
      .deleteFromSavedMovies(savedMovieId)
      .then(() => {
        setSavedMovies((prevState) =>
          prevState.filter((item) => item._id !== savedMovieId)
        );
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setAlertIsOpen(true);
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
      .then(() => {
        getUserInfo();
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const onRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then(() => {
        onLogin(email, password);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.message);
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
        setErrorMessage(err.message);
      });
  };

  const onProfileUpdate = (user) => {
    mainApi
      .updateUser(user)
      .then((user) => {
        setCurrentUser(user);
        setSuccessMessage("Ваши данные успешно обновлены");
        setIsActiveForUpdate(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
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
                setIsActiveForUpdate={setIsActiveForUpdate}
                successMessage={successMessage}
                setSuccessMessage={setSuccessMessage}
                handleEdit={onProfileEdit}
                profileErrorMessage={profileErrorMessage}
                setProfileErrorMessage={setProfileErrorMessage}
              />
            </ProtectedRoute>
            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register
                  handleRegistration={onRegister}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              )}
            </Route>
            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login
                  handleLogin={onLogin}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              )}
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
        <AlertMessage
          message={errorMessage}
          isOpen={alertIsOpen}
          setIsOpen={setAlertIsOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
