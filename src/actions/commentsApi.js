import { API_USER } from "../config";
// import { API_ADMIN } from "../config";

export const getComments = bookId => {
  return fetch(`${API_USER}/comment/getCommentListForBook/` + bookId, {
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
