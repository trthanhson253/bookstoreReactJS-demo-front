import React from "react";

const Footer = () => {
  return (
    <div>
      <div id="footer2">
        <div className="carousel-section clearfix" />
        <div className="nl-signup clearfix">
          <div className="subscribe">
            <p>Subscribe now for coupons, newsletters, and more!</p>
            <form action="#" method="post">
              <label htmlFor="nlEmailFooter" className="visuallyhidden">
                Enter Your Email for Coupon
              </label>
              <input
                type="text"
                id="nlEmailFooter"
                className="subscribe-input"
                name="email"
                placeholder="Enter Your Email for a $5 Coupon"
              />
              <button
                type="submit"
                className="btn btn-main btn-lg"
                value="Sign Up"
                id="submit-newsletter"
                aria-label="sign up email"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="social">
            <p>Let's Get Social</p>
            <a href="#" target="_blank" rel="noopener">
              <img
                src={require("../../static/img/facebook-60.gif")}
                alt="facebook footer"
                border={0}
              />
            </a>
            <a href="#" target="_blank" rel="noopener">
              <img
                src={require("../../static/img/twitter-60.gif")}
                alt="twitter footer"
                border={0}
              />
            </a>
            <a href="#" target="_blank" rel="noopener">
              <img
                src={require("../../static/img/pintrest-60.gif")}
                alt="pintrest footer"
                border={0}
              />
            </a>
            <a href="#" target="_blank" rel="noopener">
              <img
                src={require("../../static/img/blog-60.gif")}
                alt="alibris blog footer"
                border={0}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
