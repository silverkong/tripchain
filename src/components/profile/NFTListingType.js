import React from "react";
import { useDispatch } from "react-redux";
import Style from "../../css/pages/Profile.module.css";

const NFTListingType = ({ id, name, title, subtitle }) => {
  const dispatch = useDispatch();

  const setTypeValue = (e) => {
    if (name === "salesType") {
      dispatch({
        type: "SET_SALES_TYPE",
        payload: { salesType: e.target.value },
      });
    } else {
      dispatch({
        type: "SET_AUCTION_TYPE",
        payload: { auctionType: e.target.value },
      });
    }
  };

  return (
    <div className={Style.box_listing_type}>
      <input
        id={id}
        type="radio"
        name={name}
        value={id}
        className={Style.prompt_radio}
        onChange={setTypeValue}
      />
      <label className={Style.label_listing_type} htmlFor={id}>
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </label>
    </div>
  );
};

export default NFTListingType;
