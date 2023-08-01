import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Style from "../../css/components/Nav.module.css";

///////////////////
// import images //
///////////////////
import logo from "../../images/lg_tripchain.svg";
import logoBlack from "../../images/lg_tripchain_black.svg";
import logoMobile from "../../images/lg_tripchain_mobile.svg";

const Nav = () => {
  const locationNow = useLocation();

  // state
  const frontState = useSelector((state) => state.front);

  const [scrollValue, setScrollValue] = useState(0);

  const updateScroll = () => {
    setScrollValue(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className={
        locationNow.pathname === "/"
          ? scrollValue > 30
            ? Style.nav
            : Style.nav_main_top
          : Style.nav
      }
    >
      <div className={Style.box_nav}>
        <div>
          {frontState.windowWidth > 1280 ? (
            locationNow.pathname === "/" ? (
              scrollValue > 30 ? (
                <img src={logoBlack} alt="logo" />
              ) : (
                <img src={logo} alt="logo" />
              )
            ) : (
              <img src={logo} alt="logo" />
            )
          ) : (
            <img src={logoMobile} alt="logo" />
          )}
        </div>
        {/* only pc */}
        <div className={Style.nav_pc}>
          <ul>
            <li>ABOUT</li>
            <li>RECORD</li>
            <li>MARKETPLACE</li>
            <li>PROFILE</li>
          </ul>
        </div>
        {/* only mobile */}
        <div className={Style.toggleWrapper}>
          <input type="checkbox" className={Style.dn} id="dn" />
          <label htmlFor="dn" className={Style.toggle}>
            <span className={Style.toggle__handler}>
              <span className={`${Style.crater} ${Style.crater__1}`}></span>
              <span className={`${Style.crater} ${Style.crater__2}`}></span>
              <span className={`${Style.crater} ${Style.crater__3}`}></span>
            </span>
            <span className={`${Style.star} ${Style.star__1}`}></span>
            <span className={`${Style.star} ${Style.star__2}`}></span>
            <span className={`${Style.star} ${Style.star__3}`}></span>
            <span className={`${Style.star} ${Style.star__4}`}></span>
            <span className={`${Style.star} ${Style.star__5}`}></span>
            <span className={`${Style.star} ${Style.star__6}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
