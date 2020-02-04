import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooksByCategory } from "../../actions/booksApi";
import { getCatesDetail } from "../../actions/catesApi";

const AllBooksByCategory = ({ match }) => {
  const [books, setBooks] = useState([]);
  const [cates, setCates] = useState([]);

  const loadAllBooksByCategory = id => {
    getAllBooksByCategory(id).then(data => {
      if (data) {
        setBooks(data);
      } else {
      }
    });
  };

  const loadCatesDetail = id => {
    getCatesDetail(id).then(data => {
      if (data) {
        setCates(data);
      } else {
      }
    });
  };

  useEffect(() => {
    loadAllBooksByCategory(match.params.id);
    loadCatesDetail(match.params.id);
  }, []);

  return (
    <div className="container">
      <h1>{cates.name}</h1>
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
                  <i className />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooksByCategory;
