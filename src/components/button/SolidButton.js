import React from "react";
import Style from "../../css/components/Button.module.css";

const SolidButton = ({ onClick, name, value }) => {
  return (
    <button className={Style.btn_solid} onClick={onClick} name={name}>
      {value}
    </button>
  );
};

export default SolidButton;
