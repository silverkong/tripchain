import { useSelector } from "react-redux";
import Style from "../css/pages/Marketplace.module.css";

///////////////////////
// import components //
///////////////////////
import SolidButton from "../components/button/SolidButton";

// 나중에 삭제
import imgNFT from "../images/img_complete.svg";
import defaultProfileImage from "../images/img_default_profile.svg";

const MarketplaceDetail = () => {
  // state
  const frontState = useSelector((state) => state.front);

  return (
    <div className={Style.box_marketplace_detail}>
      <div
        className={Style.box_marketplace_detail_image}
        style={{
          width: frontState.windowWidth,
          height: frontState.windowWidth,
        }}
      >
        <img src={imgNFT} alt="nft" />
      </div>
      {/* Fixed Price */}
      <div className={Style.box_marketplace_detail_info}>
        <div className={Style.box_marketplace_detail_seller}>
          <div>
            <img src={defaultProfileImage} alt="profile" />
          </div>
          <span>판매자명</span>
        </div>
        <h1 className={Style.txt_nft_title}>Jeju Iho Tewoo Beach #001</h1>
        <span className={Style.txt_nft_owner}>
          Owner by <span>you</span>
        </span>
        <hr />
        <div className={Style.box_nft_sales_type}>
          <span>Sales Type</span>
          <span>Fixed price</span>
        </div>
        <div className={Style.box_nft_current_price}>
          <span>Current Price</span>
          <span>0.01 ETH</span>
        </div>
        {/* If type Auction */}
        <hr />
        <div className={Style.box_nft_auction_end}>
          <span>Auction Ends 2023. 07. 21 at 11:05 am</span>
          <span>01D : 12H : 35M : 22S</span>
        </div>
      </div>
      <SolidButton value={"구매하기"} />
    </div>
  );
};

export default MarketplaceDetail;
