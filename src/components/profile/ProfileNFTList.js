import React from "react";
import Style from "../../css/pages/Profile.module.css";

import imgDefaultProfile from "../../images/img_default_profile.svg";

const ProfileNFTList = ({ id }) => {
  return (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id} className={Style.label_nft_list_content}>
        <div className={Style.box_nft_list_content_img}>
          {/* NFT 이미지 들어갈 곳 */}
          <img src={imgDefaultProfile} alt="" />
        </div>
        <div className={Style.box_nft_list_content_title}>
          <span>NFT 이름</span>
          <span>생성된 위치</span>
        </div>
        <span className={Style.txt_nft_list_content_price}>0.01 ETH</span>
      </label>
    </div>
  );
};

export default ProfileNFTList;
