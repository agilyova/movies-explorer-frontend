const BASE_URL = `${window.location.protocol}${
  process.env.REACT_APP_API_URL || "//localhost:3001"
}`;

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((res) => {
    throw new Error(res.validation || res.error || res.message);
  });
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then(checkAnswer);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(checkAnswer);
};

export const logOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkAnswer);
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkAnswer);
};

export const updateUser = (userData) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
    }),
    credentials: "include",
  }).then(checkAnswer);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkAnswer);
};

export const addMoviesToSaved = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: movie.country || "-",
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN || "-",
      thumbnail: movie.image.formats.thumbnail.url,
      movieId: movie.id,
    }),
    credentials: "include",
  }).then(checkAnswer);
};

export const deleteFromSavedMovies = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkAnswer);
};
