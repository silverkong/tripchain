import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Style from "../css/pages/Profile.module.css";

///////////////////////
// import components //
///////////////////////
import RoundLineButton from "../components/button/RoundLineButton";
import ProfileNFTList from "../components/profile/ProfileNFTList";

///////////////////
// import images //
///////////////////
import imgDefaultProfile from "../images/img_default_profile.svg";

const Profile = () => {
  const nftId = [1, 2, 3];
  const navigate = useNavigate();

  ///////////
  // state //
  //////////
  const frontState = useSelector((state) => state.front);

  const goToListing = () => {
    const imageIndex = frontState.checkImage;
    navigate(`/marketplace/listing/${imageIndex}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={Style.box_profile}>
      <div className={Style.box_profile_image}>
        <div className={Style.bg_profile}></div>
        <div className={Style.box_image}>
          <img src={imgDefaultProfile} alt="profile" />
        </div>
      </div>
      <div className={Style.box_profile_info}>
        <h3>Unnamed</h3>
        <RoundLineButton color={"gray"} value={"Edit"} />
      </div>
      <div className={Style.box_profile_info}>
        <RoundLineButton color={"blue"} value={"Connect Metamask"} />
      </div>
      <div className={Style.box_nft_list}>
        <div className={Style.box_nft_list_title}>
          <span>보유 NFT</span>
          <span>{nftId.length}</span>
        </div>
        {/* 내가 가진 NFT 나열할 곳 */}
        {nftId.map((id) => (
          <ProfileNFTList id={id} />
        ))}
        {frontState.checkedArr.includes(true) ? (
          <button className={Style.btn_solid} onClick={goToListing}>
            마켓플레이스에 올리기
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
