import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
import { register } from "../../actions/loginApi";

const Register = () => {
  const [valuesRegister, setValuesRegister] = useState({
    name: "",
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });
  const [isRegisteredSuccess, setIsRegisteredSuccess] = useState(false);
  const [newUser, setNewUser] = useState({});
  const {
    name,
    username,
    email,
    confirmEmail,
    password,
    confirmPassword
  } = valuesRegister;

  const handleChangeRegister = name => event => {
    setValuesRegister({ ...valuesRegister, [name]: event.target.value });
  };

  const onRegister = e => {
    e.preventDefault();
    setValuesRegister({ ...valuesRegister });
    register(valuesRegister).then(data => {
      if (data) {
        setValuesRegister({ ...valuesRegister });
        setIsRegisteredSuccess(true);
        setNewUser(data);
      } else {
        setValuesRegister({ ...valuesRegister });
      }
    });
  };

  return (
    <div className="right">
      {!isRegisteredSuccess && (
        <form data-toggle="validator">
          <div>
            {/* start new customer form */}
            <table
              width="100%"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              className="fillout-form"
            >
              <tbody>
                <tr className="header-footer" style={{ fontSize: "1.5em" }}>
                  <td colSpan={2}>
                    <h2>Create a new account !</h2>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="alert alert-warning">
                      <strong>
                        Your must type all fields below to register
                      </strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="42%" align="right">
                    <label htmlFor="field0">your name</label>
                  </td>
                  <td width="58%" align="left" valign="top">
                    <input
                      required
                      id="name"
                      type="text"
                      value={name}
                      onChange={handleChangeRegister("name")}
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <label htmlFor="field1">your username</label>
                  </td>
                  <td align="left" valign="top">
                    <input
                      value={username}
                      onChange={handleChangeRegister("username")}
                      required
                      id="username"
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <span className="label label-danger">
                      Your username is already used
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <label htmlFor="field1">your e-mail</label>
                  </td>
                  <td align="left" valign="top">
                    <input
                      value={email}
                      onChange={handleChangeRegister("email")}
                      required
                      id="email"
                      type="email"
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <span className="label label-danger">
                      Your email is already used
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <label htmlFor="field2">confirm your e-mail</label>
                  </td>
                  <td align="left" valign="top">
                    <input
                      value={confirmEmail}
                      onChange={handleChangeRegister("confirmEmail")}
                      required
                      id="confirmEmail"
                      type="email"
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <span className="label label-danger">
                      Your email does not match
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="right">&nbsp;</td>
                  <td align="left" valign="top">
                    <span className="smallgreytype">
                      <b>Privacy Policy:</b> We do not share your email address.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <label htmlFor="field3">select a password</label>
                  </td>
                  <td align="left" valign="top">
                    <input
                      value={password}
                      onChange={handleChangeRegister("password")}
                      required
                      id="password"
                      type="password"
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <span className="label label-danger">
                      Your password must be at least 6 characters
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="right">&nbsp;</td>
                  <td align="left" valign="top">
                    <span className="smallgreytype">
                      Passwords must contain between 6 and 15 characters,
                      <br /> and cannot contain spaces or non-English
                      characters.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <label htmlFor="field4">re-enter password</label>
                  </td>
                  <td align="left" valign="top">
                    <span className="header">
                      <input
                        value={confirmPassword}
                        onChange={handleChangeRegister("confirmPassword")}
                        required
                        id="confirmPassword"
                        type="password"
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <span className="label label-danger">
                      Your password does not match
                    </span>
                  </td>
                </tr>

                <tr>
                  <td colSpan={2} align="left" valign="top">
                    <table border={0} className="table-btm">
                      <tbody>
                        <tr>
                          <td
                            width={15}
                            align="right"
                            valign="top"
                            style={{ borderWidth: 0 }}
                          >
                            <input
                              type="hidden"
                              name="accountwlw-checkbox_key:{actionForm.receiveNewsletters}OldValue"
                              defaultValue="false"
                            />
                            <input
                              type="checkbox"
                              name="accountwlw-checkbox_key:{actionForm.receiveNewsletters}"
                              id="field5"
                              defaultChecked
                            />
                          </td>
                          <td
                            align="left"
                            valign="top"
                            style={{ borderWidth: 0 }}
                            className="td-wide"
                          >
                            <label htmlFor="field5">
                              <div className="nlSign">
                                I agree to all of terms and services
                              </div>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className="header-footer">
                  <td colSpan={2} align="right" valign="middle">
                    <input
                      type="submit"
                      name="continue2"
                      className="btn oneClick"
                      aria-label="sign in"
                      defaultValue="Register"
                      onClick={onRegister}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* end new customer form */}
          </div>
        </form>
      )}

      {/* start new customer form */}
      {isRegisteredSuccess && (
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className="alert alert-success alert-dismissible">
                  <a
                    href="#"
                    className="close"
                    data-dismiss="alert"
                    aria-label="close"
                  >
                    ×
                  </a>
                  <h3>
                    Thank you, <strong>{newUser.name}</strong> ! You have been
                    registered your account successfully. A confirmation email
                    has been sent to your email address{" "}
                    <strong>{newUser.email}</strong>
                    .Please Sign In by using username{" "}
                    <strong>{newUser.username}</strong>.
                  </h3>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Register;
