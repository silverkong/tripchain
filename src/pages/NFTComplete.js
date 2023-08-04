import { useSelector } from "react-redux";
import Style from "../css/pages/NFTComplete.module.css";

///////////////////////
// import components //
///////////////////////
import RoundSolidButton from "../components/button/RoundSolidButton";
import RoundLineButton from "../components/button/RoundLineButton";

///////////////////
// import images //
///////////////////
import ImgComplete from "../images/img_complete.svg";

const NFTComplete = () => {
  // state
  const frontState = useSelector((state) => state.front);

  return (
    <div className={Style.box_nft_complete}>
      <div
        className={Style.box_nft_complete_image}
        style={{
          width: frontState.windowWidth,
          height: frontState.windowWidth,
        }}
      >
        <img src={ImgComplete} alt="" />
        <h1>
          AI가 그린
          <br />
          나의 여행 기록이에요!
        </h1>
        <span>제주 제주시 이호일동</span>
        <div
          style={{
            width: frontState.windowWidth,
            height: frontState.windowWidth,
          }}
        ></div>
      </div>
      <div className={Style.box_button}>
        <RoundSolidButton value={"NFT로 만들기"} />
        <RoundLineButton color={"blue"} value={"내 기록에만 남기기"} />
      </div>
    </div>
  );
};

export default NFTComplete;
