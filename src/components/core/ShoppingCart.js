import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../../static/css/ShoppingCart.css";
import { isAuthenticate } from "../../actions/loginApi";
import { getCartItemList, getShoppingCart } from "../../actions/cartApi";

const ShoppingCart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const { token } = isAuthenticate();

  const loadCartItemList = () => {
    getCartItemList(token).then(data => {
      if (data) {
        setCartItemList(data);
      } else {
      }
    });
  };

  const loadShoppingCart = () => {
    getShoppingCart(token).then(data => {
      if (data) {
        setShoppingCart(data);
      } else {
      }
    });
  };

  useEffect(() => {
    loadCartItemList();
    loadShoppingCart();
  }, []);

  return (
    <div className="container">
      <div id="invoice">
        <div className="toolbar hidden-print">
          <div className="text-left">
            <h2>Your Shopping Cart</h2>
          </div>
          <div className="text-right">
            <button type="button" class="btn btn-default">
              Continue Shopping
            </button>
            &nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-primary">
              Check Out
            </button>
          </div>
        </div>
        <br />
        <div className="alert alert-success">
          Cart Item Updated Successfully!
        </div>
        <div className="alert alert-warning">
          Oops, some of the products don't have enough stock. Please update
          product quantity.
        </div>
        <div className="alert alert-warning">
          Oops, your cart is empty. See if you can find what you link in the
          bookshelf and add them to cart.
        </div>
        <div className="invoice overflow-auto">
          <div style={{ minWidth: "600px" }}>
            <main>
              <table border={0} cellSpacing={0} cellPadding={0}>
                <thead>
                  <tr>
                    <th />
                    <th className="text-left">TITLE</th>
                    <th className="text-right">PRICE</th>
                    <th className="text-right">QUANTITY</th>
                    <th className="text-right">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItemList.map((cartItem, i) => (
                    <tr key={i}>
                      <td className="no">
                        <a>Image Here</a>
                      </td>
                      <td className="text-left">
                        <h3>{cartItem.book.title}</h3>{" "}
                        <p style={{ color: "green" }}>In Stock</p>
                        <p style={{ color: "darkred" }}>
                          Only <span>{cartItem.book.inStockNumber}</span> In
                          Stock
                        </p>
                        <p style={{ color: "darkred" }}>Product Unavailable</p>
                        <a href="javascript:;" className="pointer">
                          Remove <img src="../../../assets/img/delete.png" />
                        </a>
                      </td>
                      <td className="unit">
                        {" "}
                        <h5 style={{ color: "#db3208", fontWeight: "bold" }}>
                          $<span>{cartItem.book.ourPrice}</span>
                        </h5>
                      </td>
                      <td className="qty">
                        <input hidden="hidden" name="id" />
                        <input
                          type="number"
                          min={1}
                          id="cartItem.id"
                          name="qty"
                          className="form-control"
                        />
                        <br />
                        <a className="pointer" href="javascript:;">
                          Update <img src="../../../assets/img/reload.png" />
                        </a>
                      </td>
                      <td className="total">${cartItem.subtotal}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2} />
                    <td colSpan={2}>
                      SUBTOTAL (
                      <span>
                        <strong>
                          {"{"}
                          {"{"}cartItemNumber{"}"}
                          {"}"}
                        </strong>
                      </span>{" "}
                      items):
                    </td>
                    <td>${shoppingCart.grandTotal}</td>
                  </tr>
                  <tr>
                    <td colSpan={2} />
                    <td colSpan={2}>TAX ESTIMATE (8 %)</td>
                    <td>${}</td>
                  </tr>
                  <tr>
                    <td colSpan={2} />
                    <td colSpan={2}>GRAND TOTAL</td>
                    <td>${shoppingCart.grandTotal * 1.08}</td>
                  </tr>
                </tfoot>
              </table>
              <div className="thanks">Thank you!</div>
              <div className="notices">
                <div>NOTICE:</div>
                <div className="notice">
                  A final total will be calculated when check-out
                </div>
              </div>
            </main>
          </div>
          {/*DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom*/}
          <div />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
