import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Menu from "./Menu";
import { isAuthenticate } from "../../actions/loginApi";
import { getCurrentUser } from "../../actions/userApi";

const AccountHome = () => {
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
    <div class="container bootstrap snippet">
      <div class="row">
        <Menu />
        <div className="col-sm-9">
          <table
            width="100%"
            border={0}
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
                  <h2>
                    <strong>My Account</strong>
                  </h2>
                  <h5>
                    Edit your account settings and change your password here.
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col-md-2" />
                  <div className="col-md-8">
                    <div className="form-group row">
                      <label
                        htmlFor="username"
                        className="col-4 col-form-label"
                      >
                        My Username* :
                      </label>
                      <div className="col-8">
                        <strong>{currentUser.username}</strong>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="name" className="col-4 col-form-label">
                        My Name:
                      </label>
                      <div className="col-8">
                        <strong>{currentUser.name}</strong>
                        <span
                          className="btn btn-secondary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Update Your Name!"
                        >
                          <img src={require("../../static/img/pencil.png")} />
                        </span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="email" className="col-4 col-form-label">
                        My Email*
                      </label>
                      <div className="col-8">
                        <strong>{currentUser.email}</strong>
                        <span
                          className="btn btn-secondary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Update Your Email!"
                        >
                          <img src={require("../../static/img/pencil.png")} />
                        </span>
                      </div>
                    </div>
                    <div className="alert alert-danger alert-dismissible">
                      <a
                        href="#"
                        className="close"
                        data-dismiss="alert"
                        aria-label="close"
                      >
                        ×
                      </a>
                      <strong>
                        Your new password and Re-type new password does not
                        match.
                      </strong>
                    </div>
                    <div className="alert alert-danger alert-dismissible">
                      <a
                        href="#"
                        className="close"
                        data-dismiss="alert"
                        aria-label="close"
                      >
                        ×
                      </a>
                      <strong>
                        We cannot find your current password in our database.
                      </strong>
                    </div>
                    <div className="alert alert-success alert-dismissible">
                      <a
                        href="#"
                        className="close"
                        data-dismiss="alert"
                        aria-label="close"
                      >
                        ×
                      </a>
                      <strong>
                        You updated your password successfully. You can use this
                        new password now.
                      </strong>
                    </div>
                    <form>
                      <div className="form-group row">
                        <label
                          htmlFor="currentPassword"
                          className="col-4 col-form-label"
                        >
                          Current Password:
                        </label>
                        <div className="col-8">
                          <input
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Enter Your Current Password Here"
                            className="form-control here"
                            type="password"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="newPassword"
                          className="col-4 col-form-label"
                        >
                          New Password:
                        </label>
                        <div className="col-8">
                          <input
                            id="newPassword"
                            name="newPassword"
                            placeholder="Enter Your New Password Here"
                            className="form-control here"
                            type="password"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="retypePassword"
                          className="col-4 col-form-label"
                        >
                          Re-type New Password:
                        </label>
                        <div className="col-8">
                          <input
                            id="retypePassword"
                            name="retypePassword"
                            placeholder="Re-type Your New Password Here"
                            className="form-control here"
                            type="password"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="retypePassword"
                          className="col-8 col-form-label"
                        >
                          Note:
                          <strong>
                            Please type 3 fields to change your password
                          </strong>
                        </label>
                      </div>
                      <div className="form-group row">
                        <div className="text-center">
                          <button type="button" class="btn btn-primary">
                            Change Your Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-2" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AccountHome;
