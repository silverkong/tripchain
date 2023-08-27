import React from "react";
import Style from "../../css/pages/Profile.module.css";

const NFTListingPeriod = () => {
  return (
    <select className={Style.box_listing_period}>
      <option>1 hour</option>
      <option>6 hours</option>
      <option>1 day</option>
      <option>3 days</option>
      <option>7 days</option>
      <option>1 month</option>
      <option>3 months</option>
      <option>6 months</option>
    </select>
  );
};

export default NFTListingPeriod;
