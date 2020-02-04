// import { API_USER } from "../config";
import { API_ADMIN } from "../config";

export const getAllBooks = () => {
  return fetch(`${API_ADMIN}/books/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getAllBooksByCategory = id => {
  return fetch(`${API_ADMIN}/cates/list/` + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getCurrentBook = id => {
  return fetch(`${API_ADMIN}/books/` + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getRelatedBooks = id => {
  return fetch(`${API_ADMIN}/books/relatedBooks/` + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
