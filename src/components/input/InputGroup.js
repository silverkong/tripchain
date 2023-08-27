import React from "react";
import Style from "../../css/components/Input.module.css";

const InputGroup = ({ placeholder }) => {
  return (
    <div className={Style.input_group}>
      <input type="text" placeholder={placeholder} />
      <span>ETH</span>
    </div>
  );
};

export default InputGroup;
