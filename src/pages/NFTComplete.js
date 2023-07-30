import React, { useEffect, useState } from "react";
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
  // 브라우저 너비 값에 맞게 width, height 값 가변 적용
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [imgStyle, setImgStyle] = useState({
    width: windowWidth,
    height: windowWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleResizeImg = () => {
      setImgStyle({
        width: windowWidth,
        height: windowWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResizeImg();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className={Style.box_nft_complete}>
      <div className={Style.box_nft_complete_image} style={imgStyle}>
        <img src={ImgComplete} alt="" />
        <h1>
          AI가 그린
          <br />
          나의 여행 기록이에요!
        </h1>
        <span>제주 제주시 이호일동</span>
        <div style={imgStyle}></div>
      </div>
      <div className={Style.box_button}>
        <RoundSolidButton value={"NFT로 만들기"} />
        <RoundLineButton color={"blue"} value={"내 기록에만 남기기"} />
      </div>
    </div>
  );
};

export default NFTComplete;
