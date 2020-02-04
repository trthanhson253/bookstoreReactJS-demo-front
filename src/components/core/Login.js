import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { login, authenticate, retrievePassword } from "../../actions/loginApi";
import Register from "./Register";

const Login = ({ history }) => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);
  // const [isRegisteredSuccess, setIsRegisteredSuccess] = useState(false);
  const [valuesSignIn, setValuesSignIn] = useState({
    username: "",
    password: "",
    loginError: false,
    redirectToReferrer: false
  });

  const [valuesRetrievePassword, setValuesRetrievePassword] = useState({
    email: "",
    emailFound: false
  });

  const { username, password, loginError, redirectToReferrer } = valuesSignIn;

  const { email, emailFound } = valuesRetrievePassword;

  const handleChange = name => event => {
    setValuesSignIn({
      ...valuesSignIn,
      loginError: false,
      [name]: event.target.value
    });
  };

  const handleChangeRetrievePassword = name => event => {
    setValuesRetrievePassword({
      ...valuesRetrievePassword,
      emailFound: false,
      [name]: event.target.value
    });
  };

  const onLogin = e => {
    e.preventDefault();
    setValuesSignIn({ ...valuesSignIn, loginError: false });
    login(username, password).then(data => {
      if (data) {
        authenticate(data, () => {
          setValuesSignIn({ ...valuesSignIn, redirectToReferrer: true });
        });
      } else {
        setValuesSignIn({
          ...valuesSignIn,
          username: "",
          password: "",
          loginError: true
        });
      }
    });
  };

  const forgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  const onRetrievePassword = e => {
    e.preventDefault();
    setValuesRetrievePassword({ ...valuesRetrievePassword, emailFound: false });
    retrievePassword(email).then(data => {
      if (data) {
        setValuesRetrievePassword({ ...valuesRetrievePassword });
        setEmailNotFound(true);
      } else {
        setValuesRetrievePassword({ email: "", emailFound: true });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      history.push("/my-account/home");
      window.location.reload();
    }
  };

  const showSignIn = () =>
    !isForgotPassword && (
      <form>
        <table
          width="100%"
          border={0}
          cellSpacing={0}
          cellPadding={0}
          className="fillout-form"
        >
          <tbody>
            <tr className="header-footer" style={{ fontSize: "1.5em" }}>
              <td colSpan={2}>
                <h2>Registered users - sign in</h2>
              </td>
            </tr>
            <tr>
              <td align="right">
                <label htmlFor="email">Username</label>
              </td>
              <td>
                <input
                  onChange={handleChange("username")}
                  value={username}
                  required
                  id="username"
                  type="text"
                  size={24}
                  data-emoji_font="true"
                  style={{
                    fontFamily:
                      'arial, helvetica, "Segoe UI Emoji", "Segoe UI Symbol", Symbola, EmojiSymbols !important'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td align="right">
                <label htmlFor="password">password</label>
              </td>
              <td>
                <input
                  onChange={handleChange("password")}
                  value={password}
                  required
                  id="password"
                  type="password"
                  size={24}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                {loginError && (
                  <span className="label label-danger">
                    Sorry! The e-mail address or password you entered was
                    incorrect. Please try again.
                  </span>
                )}
              </td>
            </tr>
            <tr className="header-footer">
              <td colSpan={2} align="right">
                <input
                  type="submit"
                  className="btn oneClick"
                  defaultValue="Sign In"
                  onClick={onLogin}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary" onClick={forgotPassword}>
            Forgot your password? Click here
          </Button>
        </div>
      </form>
    );

  const showRetrieveYourPasswordInitial = () =>
    !emailNotFound && (
      <div>
        <h5>
          {" "}
          &gt;&gt; Please enter the e-mail address you use for your account,
          then click the Enter button. A new password will be sent to the e-mail
          address you submit.
        </h5>
        <form>
          <table
            width="100%"
            border={0}
            cellSpacing={0}
            cellPadding={0}
            className="fillout-form"
          >
            <tbody>
              <tr className="header-footer" style={{ fontSize: "1.5em" }}>
                <td colSpan={2}>
                  <h2>Retrieve your password</h2>
                </td>
              </tr>
              <tr>
                <td align="right">
                  <label htmlFor="email">Your Email Address</label>
                </td>
                <td>
                  <input
                    name="email"
                    onChange={handleChangeRetrievePassword("email")}
                    value={email}
                    required
                    id="email"
                    type="email"
                    size={24}
                    data-emoji_font="true"
                    style={{
                      fontFamily:
                        'arial, helvetica, "Segoe UI Emoji", "Segoe UI Symbol", Symbola, EmojiSymbols !important'
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  {emailFound && (
                    <span className="label label-danger">
                      We cannot find your email in our database. Please try
                      again!
                    </span>
                  )}
                </td>
              </tr>
              <tr className="header-footer">
                <td colSpan={2} align="right">
                  <button
                    type="submit"
                    className="btn oneClick"
                    onClick={onRetrievePassword}
                  >
                    Enter
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div style={{ textAlign: "center" }}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={forgotPassword}
          >
            Back to Sign In
          </Button>
        </div>
      </div>
    );

  const showRetrieveYourPasswordSuccess = () =>
    emailNotFound && (
      <div className="show-success-panel">
        <div className="alert alert-success alert-dismissible">
          <a href="#" className="close" data-dismiss="alert" aria-label="close">
            ×
          </a>
          <strong>
            An email with temporary password has been sent to your email
            address!
          </strong>
        </div>
        <div className="smallgreytype" style={{ textAlign: "center" }}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={forgotPassword}
          >
            Back to Sign In
          </Button>
        </div>
      </div>
    );

  const showRetrieveYourPassword = () =>
    isForgotPassword && (
      <form noValidate>
        {showRetrieveYourPasswordSuccess()}
        {showRetrieveYourPasswordInitial()}
      </form>
    );

  return (
    <div className="bea-portal-theme-alibrisInvisible">
      <div className="bea-portal-book-primary">
        <div className="bea-portal-book-primary-content">
          <div className="bea-portal-theme-alibrisMain">
            <div className="bea-portal-book-invisible">
              <div className="bea-portal-book-content">
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div
                  id="bea-portal-book-primary"
                  className="bea-portal-book-page"
                >
                  <div id="skip-main">
                    <table className="bea-portal-layout-grid" cellSpacing={0}>
                      <tbody>
                        <tr>
                          <td
                            className="bea-portal-layout-placeholder-container-singleColRightBorder"
                            width="100%"
                          >
                            <div className="bea-portal-layout-placeholder">
                              <table
                                className="bea-portal-layout-flow"
                                cellSpacing={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="bea-portal-layout-placeholder-container"
                                      width="100%"
                                    >
                                      <div className="bea-portal-layout-placeholder">
                                        {/* w-begin */}
                                        {/* tb-begin */}
                                        {/* tb-end */}
                                        <div id="login">
                                          <div id="loginContainer">
                                            <div className="page-intro">
                                              <h1>Account Sign-In</h1>
                                            </div>
                                            <p>{/* start left div */}</p>
                                            <div className="left">
                                              {showSignIn()}
                                              {showRetrieveYourPassword()}
                                              <br />
                                              <br />
                                              <br />
                                            </div>
                                            {/* end left div */}
                                            {/* start right div */}
                                            <Register />
                                            {/* end right div */}
                                            <div className="clear-space" />
                                          </div>
                                        </div>
                                        {/* w-end */}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
                <div className="bea-portal-theme-alibrisInvisible"></div>
              </div>
            </div>
          </div>
          <div className="bea-portal-theme-alibrisMain"></div>
        </div>
      </div>
      {redirectUser()}
    </div>
  );
};

export default Login;
