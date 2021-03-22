import React, { useEffect, useState } from "react";
import mainlogo from "../media/headerlogo.png";
import { Link, useLocation } from "react-router-dom";
import menu from "../media/menu.svg";
import close from "../media/close.svg";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [mobileMenu, toggleMobMenu] = useState(false);
  return (
    <div className="header">
      <div className="d-none d-lg-block head-desktop">
        <div className="header-container d-flex flex-row align-items-center">
          <div className="col-2">
            <Link to="/">
              <img src={mainlogo} alt="mainlogo" />
            </Link>
          </div>
          <div className="col-8 d-flex justify-content-center border">
            {location.pathname === "/shop" ? (
              <div className="header-shop-container">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <h5 className="shop-title">SHOP</h5>[
                  <Link to="/">
                    <h5>View All,</h5>
                  </Link>
                  <Link to="/">
                    <h5>Tailoring,</h5>
                  </Link>
                  <Link to="/">
                    <h5>Trousers,</h5>
                  </Link>
                  <Link to="/">
                    <h5>Tops,</h5>
                  </Link>
                  <Link to="/">
                    <h5> Dresses,</h5>
                  </Link>
                  <Link to="/">
                    <h5>Skirts,</h5>
                  </Link>
                  <Link to="/">
                    <h5>Accessories</h5>
                  </Link>
                  ]
                </div>
              </div>
            ) : null}
            {location.pathname === "/contact" ? <h5>CONTACT & INFO</h5> : null}
            {location.pathname === "/" ? <h5>CHAPTER 1</h5> : null}
          </div>
          <div className="d-flex justify-content-around border">
            <Link to="/about">
              <h5>About</h5>
            </Link>
            <Link to="/shop">
              <h5>Shop</h5>
            </Link>
            <Link to="/">
              <h5>Chapters</h5>
            </Link>
            <Link to="/">
              <h5>Cart (0) </h5>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none head-mobile position-relative">
        <div className="header-container position-relative">
          <div className="col-2">
            <Link to="/">
              <img src={mainlogo} alt="mainlogo" />
            </Link>
          </div>
          <div className="col-6">
            {location.pathname === "/contact" ? <h5>CONTACT & INFO</h5> : null}
            {location.pathname === "/" ? <h5>CHAPTER 1</h5> : null}
          </div>
          <div className="col-2 text-end">
            <span>Cart(0)</span>
          </div>
          <div className="col-2 text-center">
            {mobileMenu ? (
              <img
                onClick={() => toggleMobMenu(!mobileMenu)}
                className="menu-icon"
                src={close}
                alt=""
              />
            ) : (
              <img
                onClick={() => toggleMobMenu(!mobileMenu)}
                className="menu-icon"
                src={menu}
                alt=""
              />
            )}
          </div>
        </div>
        <div className={mobileMenu ? "mobile-menu active" : "mobile-menu"}>
          <Link to="/about">
            <span onClick={() => toggleMobMenu(false)}>ABOUT</span>
          </Link>
          <Link to="/shop">
            <span onClick={() => toggleMobMenu(false)}>SHOP</span>
          </Link>
          <div className="mobile-links text-center">
            <Link to="/">
              <h5 onClick={() => toggleMobMenu(false)}>Tailoring</h5>
            </Link>
            <Link to="/">
              <h5 onClick={() => toggleMobMenu(false)}>Trousers</h5>
            </Link>
            <Link to="/">
              <h5 onClick={() => toggleMobMenu(false)}>Tops</h5>
            </Link>
            <Link to="/">
              <h5 onClick={() => toggleMobMenu(false)}> Dresses</h5>
            </Link>
            <Link to="/">
              <h5 onClick={() => toggleMobMenu(false)}>Skirts</h5>
            </Link>
            <Link to="/">
              <h5 onClick={() => toggleMobMenu(false)}>Accessories</h5>
            </Link>
          </div>
            <Link to="/">
              <span onClick={() => toggleMobMenu(false)}>CHAPTERS</span>
            </Link>
            <Link to="/contact">
              <span onClick={() => toggleMobMenu(false)}>CONTACT</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
