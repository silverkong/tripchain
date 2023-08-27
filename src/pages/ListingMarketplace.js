import React from "react";
// import { useParams } from "react-router-dom";
import Style from "../css/pages/Profile.module.css";

//////////////////////
// import component //
//////////////////////
import NFTListingType from "../components/profile/NFTListingType";
import NFTListingPeriod from "../components/profile/NFTListingPeriod";
import InputGroup from "../components/input/InputGroup";
import SolidButton from "../components/button/SolidButton";

// Sales Type
const salesType = [
  {
    id: "fixedPrice",
    name: "salesType",
    title: "Fixed price",
    subtitle: "설정한 가격으로 판매됩니다",
  },
  {
    id: "timedAuction",
    name: "salesType",
    title: "Timed auction",
    subtitle: "경매를 통해 거래가 이루어집니다",
  },
];

const ListingMarketplace = () => {
  //   let { id } = useParams();
  return (
    <div className={Style.box_list_marketplace}>
      <div className={Style.box_nft_info}>
        <div className={Style.box_nft_image}>
          <img src="" alt="nft" />
        </div>
        <div className={Style.box_nft_title}>
          <h3>NFT 이름</h3>
          <span>위치정보</span>
        </div>
      </div>
      <hr />
      <div className={Style.box_sales_type}>
        <h4>판매 유형 선택</h4>
        {salesType.map((type) => (
          <NFTListingType
            id={type.id}
            key={type.id}
            name={type.name}
            title={type.title}
            subtitle={type.subtitle}
          />
        ))}
      </div>
      {/* fixed price 일 경우 */}
      <div className={Style.box_fixed_price}>
        <h4>판매 가격</h4>
        <InputGroup placeholder="판매할 가격을 입력해주세요" />
      </div>
      <div className={Style.box_fixed_price_period}>
        <h4>판매 기간</h4>
        <NFTListingPeriod />
      </div>
      <SolidButton value="등록하기" />
    </div>
  );
};

export default ListingMarketplace;
