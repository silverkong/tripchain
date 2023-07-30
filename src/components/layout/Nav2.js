import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../../css/components/Nav.module.css";

///////////////////
// import images //
///////////////////
import iconLeftArrow from "../../images/ic_left_arrow.svg";

const Nav2 = () => {
  const navigate = useNavigate();

  // 이전 페이지로 이동
  const goToBack = () => {
    navigate(-1);
  };

  return (
    <div className={Style.nav2}>
      <button onClick={goToBack}>
        <img src={iconLeftArrow} alt="back" />
      </button>
    </div>
  );
};

export default Nav2;
