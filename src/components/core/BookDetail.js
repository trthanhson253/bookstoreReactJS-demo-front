import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../static/css/BookDetail.css";
import { getCurrentBook, getRelatedBooks } from "../../actions/booksApi";
import { getComments } from "../../actions/commentsApi";
import Button from "@material-ui/core/Button";
import { isAuthenticate } from "../../actions/loginApi";
import { addItem } from "../../actions/cartApi";
import { addWishListItem } from "../../actions/wishlistApi";

const BookDetail = ({ match, history }) => {
  const [book, setBook] = useState([]);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [comments, setComments] = useState([]);

  const { token } = isAuthenticate();

  const loadGetCurrentBooks = id => {
    getCurrentBook(id).then(data => {
      if (data) {
        setBook(data);
      } else {
      }
    });
  };

  const loadRelatedBooks = id => {
    getRelatedBooks(id).then(data => {
      if (data) {
        setRelatedBooks(data);
      } else {
      }
    });
  };

  const loadComments = id => {
    getComments(id).then(data => {
      if (data) {
        setComments(data);
      } else {
      }
    });
  };

  const onAddToCart = () => {
    addItem(match.params.id, 1, token).then(data => {
      if (data) {
        history.push("/shopping-cart");
      } else {
        console.log("ERROR");
      }
    });
  };

  const onAddToWishListCart = () => {
    addWishListItem(match.params.id, token).then(data => {
      if (data) {
        window.location.reload();
      } else {
        console.log("ERROR");
      }
    });
  };

  useEffect(() => {
    loadGetCurrentBooks(match.params.id);
    loadRelatedBooks(match.params.id);
    loadComments(match.params.id);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="col-sm-8">
          <Link to="#">Back to Category</Link>
          <br />
          <br />
          <div data-spy="scroll" className="tabbable-panel">
            <div className="tabbable-line">
              <ul className="nav nav-tabs ">
                <li className="active">About this book</li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tab_default_1">
                  <img
                    className="card-img-top"
                    style={{ width: "265px", height: "260px" }}
                    src="http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg"
                    alt="a"
                  />
                  <h2>{book.title}</h2>
                  <br />
                  <hr />
                  <br />
                  <div className="panel-group">
                    <div className="panel panel-primary">
                      <div className="panel-heading">Description</div>
                      <div className="panel-body">{book.description}</div>
                    </div>
                  </div>
                  <hr />
                  <div className="container">
                    <div className="col-sm-8">
                      <div className="panel panel-white post panel-shadow">
                        <div
                          className="post-heading"
                          style={{ backgroundColor: "gainsboro" }}
                        >
                          <div className="pull-left image">
                            <img
                              src={require("../../static/img/book.png")}
                              className="avatar"
                            />
                          </div>
                          <div className="pull-left meta">
                            <div className="title h5">
                              <h3>
                                <strong>Customer Review</strong>{" "}
                              </h3>
                            </div>
                            <h6 className="text-muted time">
                              Write your review
                            </h6>
                          </div>
                        </div>
                        <div className="post-footer">
                          <form>
                            <div className="input-group">
                              <input
                                className="form-control"
                                placeholder="Add a comment"
                                type="text"
                                required
                                id="comment"
                                name="comment"
                              />
                              <span className="input-group-addon">
                                <a href="javascript:;">
                                  <i className="fa fa-edit" />
                                </a>
                              </span>
                            </div>
                          </form>
                          <div>
                            You must sign in to write review and like comment
                          </div>
                          {comments.map((comment, i) => (
                            <div className="comment-body">
                              <div className="comment-heading">
                                <h4 className="user">{comment.user.name}</h4>
                                <h5 className="time">- Time </h5>
                              </div>
                              <p>{comment.content}</p>
                              <a href="javascript:;" className="info">
                                <img
                                  src={require("../../static/img/like.png")}
                                />
                                <strong>
                                  &nbsp;{comment.likesList.length}
                                </strong>{" "}
                                <span>
                                  <div>
                                    People who liked this post:{" "}
                                    <p>
                                      - {"{"}
                                      {"{"}likesList.name{"}"}
                                      {"}"}
                                    </p>
                                  </div>
                                </span>
                              </a>
                              <p>
                                <a href="javascript:/">
                                  <span>Like</span>
                                </a>
                                -{" "}
                                <img
                                  src={require("../../static/img/conversation.png")}
                                />
                                &nbsp;
                                <a href="javascript:;">
                                  <span>Reply</span>
                                  <span>Close</span>
                                </a>
                              </p>
                            </div>
                          ))}
                          ;
                          <ul className="comments-list">
                            <form>
                              <div className="input-group">
                                <input
                                  className="form-control"
                                  placeholder="Add a comment"
                                  type="text"
                                  required
                                  id="replyComment"
                                  name="replyComment"
                                />
                                {/* <input type="hidden" id="commentId" name="commentId" [(ngModel)]="comment"> */}
                                <span className="input-group-addon">
                                  <a href="javascript:;">
                                    <i className="fa fa-edit" />
                                  </a>
                                </span>
                              </div>
                            </form>
                            <li
                              className="comment"
                              style={{ backgroundColor: "azure" }}
                            >
                              <Link className="pull-left" href="#">
                                <img
                                  className="avatar img-circle"
                                  alt="avatar"
                                />
                              </Link>
                              <div className="comment-body">
                                <div className="comment-heading">
                                  <h4 className="user">
                                    {"{"}
                                    {"{"}replyComment.user.name{"}"}
                                    {"}"}
                                  </h4>
                                  <h5 className="time">Time</h5>
                                </div>
                                <p>
                                  {"{"}
                                  {"{"}replyComment.content{"}"}
                                  {"}"}
                                </p>
                              </div>
                            </li>
                          </ul>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="menu_title">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="text-left">
                    List Price:
                    <strong
                      style={{
                        textDecoration: "line-through",
                        fontSize: "medium"
                      }}
                    >
                      ${book.listPrice}
                    </strong>
                  </div>
                  <div className="text-left">
                    Our Price:
                    <strong style={{ fontSize: "x-large" }}>
                      ${book.ourPrice}
                    </strong>
                  </div>
                  You saved: ${book.listPrice - book.ourPrice}
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  {book.inStockNumber > 10 && (
                    <h4 style={{ color: "green" }}>In Stock</h4>
                  )}
                  {book.inStockNumber < 10 && book.inStockNumber > 0 && (
                    <h4 style={{ color: "green" }}>
                      Only <span>{book.inStockNumber}</span> In Stock
                    </h4>
                  )}
                  {book.inStockNumber == 0 && (
                    <h4 style={{ color: "darkred" }}>Unavailable</h4>
                  )}

                  <span>Qty: </span>
                  <select
                    className="browser-default"
                    style={{ display: "inline", width: "50px" }}
                  >
                    <option>x</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <h4>
                <span style={{ color: "red" }}>
                  Oops, only <span>{book.inStockNumber}</span>
                  In Stock.
                </span>
              </h4>
              <span>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onAddToWishListCart}
                >
                  ADD
                </Button>
                <span>&nbsp; Add To My Favorite List</span>
                <span>&nbsp; You added this book to Favorite List</span>
              </span>
              <br />
              <br />
              {isAuthenticate() && (
                <button
                  color="warn"
                  className="btn btn-danger btn-block"
                  onClick={onAddToCart}
                >
                  ADD TO CART
                </button>
              )}
              {!isAuthenticate() && (
                <button color="warn" className="btn btn-danger btn-block">
                  You need to login to add items
                </button>
              )}
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">Author:</label>
                    {book.author}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Publisher: </label>
                    {book.publisher}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">ISBN: </label>
                    {book.isbn}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Language: </label>
                    {book.language}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Number Of Pages: </label>
                    {book.numberOfPages}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Format: </label>
                    {book.format}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Shipping Weight: </label>
                    {book.shippingWeight}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Publication Date: </label>
                    {book.publicationDate}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Number in Stock: </label>
                    {book.inStockNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <h1>Related Books in this category</h1>
        <div className="row">
          {relatedBooks.map((relatedBook, i) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
              <div className="card">
                <Link to={`/books/list/${relatedBook.id}`}>
                  <img
                    className="card-img-top"
                    style={{ width: "265px", height: "260px" }}
                    src="http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg"
                    alt="a"
                  />
                </Link>

                <div className="card-block">
                  <h4 className="card-title">
                    <Link to="">{relatedBook.title}</Link>
                  </h4>
                  <div className="meta">
                    by
                    <strong>{relatedBook.author}</strong>
                  </div>
                  <div className="card-text">
                    Publisher: <strong>{relatedBook.publisher}</strong>
                  </div>
                  <div className="card-text">
                    ISBN: <strong>{relatedBook.isbn}</strong>
                  </div>
                </div>
                <div className="card-footer">
                  <span className="float-right">
                    <h3>${relatedBook.listPrice}</h3>
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
    </div>
  );
};

export default BookDetail;
