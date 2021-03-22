import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = (params) => {
  let location = useLocation();
  let counter = params.counter;
  return (
    <div className="footer position-absolute bottom-0 end-0">
      {location.pathname === "/" ? (
        <div className="d-flex flex-row align-items-center">
          <div className="left-box-before">
            <span>© 2021 Sehnsucht atelier</span>
          </div>
          {/* <div className="center-box text-center">
            <span>Contact</span>
            <span>Terms of Service</span>
            <span>Shipping and Returns</span>
            <span>Privacy Policy</span>
            <span>Instagram</span>
          </div> */}
          <div className="right-box-before text-end">
            <Link to="/contact">
              <span>Contact</span>
            </Link>
            <span>{counter}/28</span>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-row align-items-center">
          <div className="left-box">
            <span>© 2021 Sehnsucht atelier</span>
          </div>
          <div className="center-box text-center">
            <span>Contact</span>
            <span>Terms of Service</span>
            <span>Shipping and Returns</span>
            <span>Privacy Policy</span>
            <span>
              <a href="https://www.instagram.com/sehnsucht_atelier/">
                Instagram
              </a>
            </span>
          </div>
          <div className="right-box text-end">
            {location.pathname === "/contact" ? (
              <span>
                <a href="https://www.instagram.com/peach.blossom_studio">
                  <span>Design by @peach.blossom_studio</span>
                </a>
              </span>
            ) : (
              <Link to="/contact">
                <span>Contact</span>
                <span>{counter}/28</span>
              </Link>
            )}
          </div>
        </div>
      )}
      {/* <div className="d-flex flex-row align-items-center">
        <div className="left-box">
          <span>© 2021 Sehnsucht atelier</span>
        </div>
        <div className="center-box text-center">
          <span>Contact</span>
          <span>Terms of Service</span>
          <span>Shipping and Returns</span>
          <span>Privacy Policy</span>
          <span>Instagram</span>
        </div>
        <div className="right-box text-end">
          <Link to="/contact">
            <span>Contact</span>
            <span>{counter}/28</span>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
