import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks } from "../../actions/booksApi";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const init = () => {
    getAllBooks().then(data => {
      if (data) {
        setBooks(data);
      } else {
      }
    });
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <h1>ALL BOOKS</h1>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select id="sortBy" className="form-control">
            <option>---------------Sort By---------------</option>
            <option value="pricelowtohigh">Price From Low To High</option>
            <option value="pricehightolow">Price From High To Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
      </div>
      <br />
      <br />
      <div className="row">
        {books.map((book, i) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={i}>
            <div className="card" style={{ height: "550px" }}>
              <Link to={`/books/list/${book.id}`}>
                <img
                  className="card-img-top"
                  style={{ width: "265px", height: "260px" }}
                  src="http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg"
                />
              </Link>
              <div className="card-block">
                <h4 className="card-title">
                  <Link to={`/books/list/${book.id}`}>{book.title}</Link>
                </h4>
                <div className="meta">
                  by <strong>{book.author}</strong>
                </div>
                <div className="card-text">
                  Publisher: <strong>{book.publisher}</strong>
                </div>
                <div className="card-text">
                  ISBN: <strong>{book.isbn}</strong>
                </div>
              </div>
              <div className="card-footer">
                <span className="float-right">
                  <h3>${book.listPrice}</h3>
                </span>
                <span>
                  <i />
                </span>
              </div>
            </div>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
};

export default AllBooks;
