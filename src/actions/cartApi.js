import { API_USER } from "../config";
// import { API_ADMIN } from "../config";

export const addItem = (bookId, qty, token) => {
  return fetch(`${API_USER}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({ bookId, qty })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getCartItemList = token => {
  return fetch(`${API_USER}/cart/getCartItemList`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + token
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getShoppingCart = token => {
  return fetch(`${API_USER}/cart/getShoppingCart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + token
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
