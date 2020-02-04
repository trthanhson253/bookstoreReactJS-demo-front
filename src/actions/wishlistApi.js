import { API_USER } from "../config";
// import { API_ADMIN } from "../config";

export const addWishListItem = (bookId, token) => {
  return fetch(`${API_USER}/wishlistcart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + token
    },
    body: bookId
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getWishListCartItem = token => {
  return fetch(`${API_USER}/wishlistcart/getWishListCartItemList`, {
    method: "GET",
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

export const onRemoveWishListCartItem = (id, token) => {
  return fetch(`${API_USER}//wishlistcart/removeItem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + token
    },
    body: id
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
