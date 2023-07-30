import React from "react";
import Style from "../../css/components/Input.module.css";

const Input = ({ id, type, placeholder }) => {
  return (
    <input
      id={id}
      className={Style.input}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
