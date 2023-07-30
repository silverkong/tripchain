import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Style from "../../css/components/Nav.module.css";

///////////////////
// import images //
///////////////////
import logoMobile from "../../images/lg_tripchain_mobile.svg";

const Nav = () => {
  let locationNow = useLocation();
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
      <div>
        <img src={logoMobile} alt="logo" />
      </div>
      <div class={Style.toggleWrapper}>
        <input type="checkbox" class={Style.dn} id="dn" />
        <label htmlFor="dn" class={Style.toggle}>
          <span class={Style.toggle__handler}>
            <span class={`${Style.crater} ${Style.crater__1}`}></span>
            <span class={`${Style.crater} ${Style.crater__2}`}></span>
            <span class={`${Style.crater} ${Style.crater__3}`}></span>
          </span>
          <span class={`${Style.star} ${Style.star__1}`}></span>
          <span class={`${Style.star} ${Style.star__2}`}></span>
          <span class={`${Style.star} ${Style.star__3}`}></span>
          <span class={`${Style.star} ${Style.star__4}`}></span>
          <span class={`${Style.star} ${Style.star__5}`}></span>
          <span class={`${Style.star} ${Style.star__6}`}></span>
        </label>
      </div>
    </div>
  );
};

export default Nav;
