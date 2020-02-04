import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticate } from "../../actions/loginApi";
import { getCurrentUser } from "../../actions/userApi";

const Menu = () => {
  const [currentUser, setCurrentUser] = useState([]);

  const { token } = isAuthenticate();

  const loadCurrentUser = token => {
    getCurrentUser(token).then(data => {
      if (data) {
        setCurrentUser(data);
        console.log(data);
      } else {
      }
    });
  };

  useEffect(() => {
    loadCurrentUser(token);
  }, []);
  return (
    <div className="col-sm-3">
      {/*left col*/}
      <div className="text-center">
        <img alt="avatar" style={{ height: "120px", width: "120px" }} />
      </div>
      <br />
      <div
        className="list-group"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <Link
          to="/my-account/home"
          className="list-group-item list-group-item-action"
        >
          Account
        </Link>
        <Link to="" className="list-group-item list-group-item-action">
          Public Profile
        </Link>
        <Link to="" className="list-group-item list-group-item-action">
          Payment Method
        </Link>
        <Link
          to="/my-account/shipping"
          className="list-group-item list-group-item-action"
        >
          Shipping
        </Link>
        <Link to="" className="list-group-item list-group-item-action">
          Order
        </Link>
      </div>
      <table
        width="100%"
        cellSpacing={0}
        cellPadding={0}
        className="fillout-form"
      >
        <tbody>
          <tr
            className="header-footer text-center"
            style={{ fontSize: "1.5em" }}
          >
            <td colSpan={2}>
              <h2>{currentUser.name}</h2>
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default Menu;
