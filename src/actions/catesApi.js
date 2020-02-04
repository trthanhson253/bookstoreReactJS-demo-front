// import { API_USER } from "../config";
import { API_ADMIN } from "../config";

export const getAllCates = () => {
  return fetch(`${API_ADMIN}/cates/all`, {
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

export const getCatesDetail = id => {
  return fetch(`${API_ADMIN}/cates/` + id, {
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
