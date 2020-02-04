import { API_USER } from "../config";

export const getCurrentUser = token => {
  return fetch(`${API_USER}/getCurrentUser`, {
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
