import React from "react";
import Style from "../../css/components/Button.module.css";

const RoundSolidButton = ({ value, onClick }) => {
  return (
    <button className={Style.btn_solid_round} onClick={onClick}>
      {value}
    </button>
  );
};

export default RoundSolidButton;
