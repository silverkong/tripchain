import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Style from "../css/pages/Marketplace.module.css";

// 나중에 삭제
import imgNFT from "../images/img_complete.svg";

const Marketplace = () => {
  const navigate = useNavigate();
  // state
  const frontState = useSelector((state) => state.front);

  const goToMarketplaceDetail = () => {
    navigate("/marketplace/1");
    window.scrollTo(0, 0);
  };

  return (
    <div className={Style.box_marketplace}>
      <div className={Style.box_title}>
        <p className={Style.txt_main_title}>Marketplace</p>
        <p className={Style.txt_sub_title}>
          다른 사람들의 특별한 추억과
          <br />
          나의 소중한 추억을 공유하고 거래할 수 있어요!
        </p>
      </div>
      {/* 판매중인 NFT가 반복해서 나올 곳 !! Classname 삭제되지 않게 조심 */}
      <div className={Style.box_nft_sell} onClick={goToMarketplaceDetail}>
        <div className={Style.box_nft_seller}>
          {/* 판매자 정보가 들어갈 곳 */}
          <div className={Style.box_nft_seller_profile}></div>
          <span className={Style.txt_nft_seller_nickname}>판매자 이름</span>
        </div>
        <div
          className={Style.box_nft_image}
          style={{
            width: frontState.windowWidth - 44,
            height: frontState.windowWidth - 44,
          }}
        >
          {/* NFT 이미지 들어갈 곳 */}
          <img src={imgNFT} alt="nft" />
        </div>
        <div className={Style.box_nft_info}>
          {/* NFT 정보가 들어갈 곳 */}
          <p className={Style.txt_nft_title}>Jeju Iho Tewoo Beach #001</p>
          <span className={Style.txt_nft_sell_type}>Fixed</span>
          <span className={Style.txt_nft_price}>0.01 ETH</span>
        </div>
      </div>
      {/* 판매중인 NFT가 반복해서 나올 곳 !! Classname 삭제되지 않게 조심 */}
      <div className={Style.box_nft_sell}>
        <div className={Style.box_nft_seller}>
          {/* 판매자 정보가 들어갈 곳 */}
          <div className={Style.box_nft_seller_profile}></div>
          <span className={Style.txt_nft_seller_nickname}>판매자 이름</span>
        </div>
        <div
          className={Style.box_nft_image}
          style={{
            width: frontState.windowWidth - 44,
            height: frontState.windowWidth - 44,
          }}
        >
          {/* NFT 이미지 들어갈 곳 */}
          <img src={imgNFT} alt="nft" />
        </div>
        <div className={Style.box_nft_info}>
          {/* NFT 정보가 들어갈 곳 */}
          <p className={Style.txt_nft_title}>Jeju Iho Tewoo Beach #001</p>
          <span className={Style.txt_nft_sell_type}>Fixed</span>
          <span className={Style.txt_nft_price}>0.01 ETH</span>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
