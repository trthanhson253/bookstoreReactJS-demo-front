import React from "react";
// import { Link } from "react-router-dom";
import Menu from "./Menu";

const AccountShipping = () => {
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
                    <strong>Shipping Address</strong>
                  </h2>
                  <h5>Update your shipping address information.</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <h1>
                          My Shipping Address
                          <div className="btn icon-btn pull-right">
                            <button mat-raised-button color="warn">
                              +Add New Address
                            </button>
                          </div>
                        </h1>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div id="fancy-list-group">
                        <div className="row">
                          <div className="list-group">
                            <div className="col-lg-12">
                              <li className="list-group-item">
                                <div className="list-group-item-addon">
                                  <img
                                    src="../../../assets/img/house.png"
                                    alt="a"
                                  />
                                </div>
                                <div className="list-group-item-content">
                                  <h4 className="list-group-item-heading">
                                    <strong>
                                      {"{"}
                                      {"{"} s.userShippingName {"}"}
                                      {"}"}
                                    </strong>
                                  </h4>
                                  <p className="list-group-item-text">
                                    {"{"}
                                    {"{"} s.userShippingStreet {"}"}
                                    {"}"} ,{"{"}
                                    {"{"} s.userShippingCity {"}"}
                                    {"}"} ,{"{"}
                                    {"{"} s.userShippingState {"}"}
                                    {"}"}
                                    {"{"}
                                    {"{"} s.userShippingZipcode {"}"}
                                    {"}"} ,{"{"}
                                    {"{"}
                                    s.userShippingCountry
                                    {"}"}
                                    {"}"}
                                  </p>
                                </div>
                                <div className="list-group-item-controls">
                                  <span className="label">Controls</span>
                                  <div className="btn-group">
                                    <a
                                      href="javascript:;"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Update this address"
                                    >
                                      <img src="../../../assets/img/pencil.png" />
                                    </a>
                                    <a
                                      href="javascript:;"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Delete this address"
                                    >
                                      <img
                                        src="../../../assets/img/bin.png"
                                        alt="a"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              {/* <button
                        mat-raised-button
                        class="mat-primary"
                        type="submit"
                        (click)="setDefaultShipping(s.id)"
                        *ngIf="s.userShippingDefault == 0"
                      > */}
                              <a
                                href="javascript:;"
                                style={{ textDecoration: "underline" }}
                              >
                                Choose this Address
                              </a>
                              {/* </button> */}
                              <h5>
                                <img
                                  src="../../../assets/img/success.png"
                                  alt="a"
                                />
                                <strong>
                                  This is your main shipping address
                                </strong>
                              </h5>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AccountShipping;
