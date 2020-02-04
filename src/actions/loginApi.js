import { API_USER } from "../config";

export const login = (username, password) => {
  return fetch(`${API_USER}/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const retrievePassword = email => {
  return fetch(`${API_USER}/forgotPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(email)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const register = user => {
  return fetch(`${API_USER}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const onLogout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("currentUser");
    next();
    return fetch(`${API_USER}/logout`, {
      method: "POST",
      body: {}
    })
      .then(response => {
        console.log("sign out");
      })
      .catch(err => console.log(err));
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("currentUser", JSON.stringify(data));
    next();
  }
};

export const isAuthenticate = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("currentUser")) {
    return JSON.parse(localStorage.getItem("currentUser"));
  } else {
    return false;
  }
};
