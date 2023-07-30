import React from "react";
import Style from "../../css/components/Button.module.css";

const RoundLineButton = ({ color, value, onClick }) => {
  return (
    <button
      className={
        color === "blue" ? Style.btn_line_blue_round : Style.btn_line_gray_round
      }
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default RoundLineButton;
