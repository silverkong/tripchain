import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Style from "../../css/components/Nav.module.css";

///////////////////
// import images //
///////////////////
import icMenuCameraOff from "../../images/ic_menu_camera_off.svg";
import icMenuCameraOn from "../../images/ic_menu_camera_on.svg";
import icMenuGalleryOff from "../../images/ic_menu_gallery_off.svg";
// import icMenuGalleryOn from "../../images/ic_menu_gallery_on.svg";
import icMenuMarketplaceOff from "../../images/ic_menu_marketplace_off.svg";
import icMenuMarketplaceOn from "../../images/ic_menu_marketplace_on.svg";
import icMenuProfileOff from "../../images/ic_menu_profile_off.svg";
import icMenuProfileOn from "../../images/ic_menu_profile_on.svg";

const BottomNav = ({ authenticate }) => {
  let locationNow = useLocation();
  let navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const goToMarketplace = () => {
    navigate("/marketplace");
    window.scrollTo(0, 0);
  };

  const goToProfile = () => {
    navigate("/profile");
    window.scrollTo(0, 0);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={Style.nav_bottom}>
      <button onClick={goToMain}>
        <img
          src={locationNow.pathname === "/" ? icMenuCameraOn : icMenuCameraOff}
          alt="add nft"
        />
      </button>
      <button>
        <img src={icMenuGalleryOff} alt="" />
      </button>
      <button onClick={goToMarketplace}>
        <img
          src={
            locationNow.pathname === "/marketplace"
              ? icMenuMarketplaceOn
              : icMenuMarketplaceOff
          }
          alt="marketplace"
        />
      </button>
      <button onClick={authenticate ? goToProfile : goToLogin}>
        <img
          src={
            locationNow.pathname === "/profile" ||
            locationNow.pathname === "/login"
              ? icMenuProfileOn
              : icMenuProfileOff
          }
          alt="profile"
        />
      </button>
    </div>
  );
};

export default BottomNav;
