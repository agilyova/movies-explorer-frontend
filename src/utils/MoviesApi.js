export const getAllMovies = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((res) => {
      throw new Error(res.validation.body.message || res.error || res.message);
    });
  });
};
