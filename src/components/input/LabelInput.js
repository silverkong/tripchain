import React from "react";
import Style from "../../css/components/Input.module.css";

const LabelInput = ({ id, type, placeholder }) => {
  return (
    <input
      id={id}
      className={Style.label_input}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default LabelInput;
