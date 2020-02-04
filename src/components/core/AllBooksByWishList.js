import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  onRemoveWishListCartItem,
  getWishListCartItem
} from "../../actions/wishlistApi";
import { isAuthenticate } from "../../actions/loginApi";

const AllBooksByWishList = () => {
  const [wishListCartItemList, setWishListCartItemList] = useState([]);

  const { token } = isAuthenticate();

  const loadWishListCartItemList = () => {
    getWishListCartItem(token).then(data => {
      if (data) {
        setWishListCartItemList(data);
      } else {
        console.log("ERROR");
      }
    });
  };

  const removeWishListCartItem = id => {
    onRemoveWishListCartItem(id, token).then(data => {
      if (data) {
        // loadWishListCartItemList();
      } else {
      }
    });
  };

  useEffect(() => {
    loadWishListCartItemList();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <h1>YOUR FAVORITE BOOK</h1>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        {wishListCartItemList.map((wishListCartItem, i) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={i}>
            <div className="card">
              <Link to={`/books/list/${wishListCartItem.book.id}`}>
                <img
                  className="card-img-top"
                  style={{ width: "265px", height: "260px" }}
                />
              </Link>
              <div className="card-block">
                <h4 className="card-title">
                  <Link to={`/books/list/${wishListCartItem.book.id}`}>
                    {wishListCartItem.book.title}
                  </Link>
                </h4>
                <div className="meta">
                  by <strong>{wishListCartItem.book.author}</strong>
                </div>
                <div className="card-text">
                  Publisher: <strong>{wishListCartItem.book.publisher}</strong>
                </div>
                <div className="card-text">
                  ISBN: <strong>{wishListCartItem.book.isbn}</strong>
                </div>
              </div>
              <div className="card-footer">
                <span className="float-right">
                  <h3>${wishListCartItem.book.listPrice}</h3>
                </span>
                <span>
                  <i className />
                </span>
                <br />
                <a
                  href="javascript:;"
                  onClick={removeWishListCartItem(wishListCartItem.id)}
                >
                  Remove this book
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        ))}

        <br />
      </div>
    </div>
  );
};

export default AllBooksByWishList;
