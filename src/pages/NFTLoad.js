import React, { useEffect } from "react";
import Style from "../css/pages/NFTLoad.module.css";

import ImgTripchainLoading from "../images/img_tripchain_loading.svg";

const NFTLoad = () => {
  // 모바일 웹페이지 반영 시 100vh 문제로 vh 재정의
  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className={Style.box_loading}>
      <img src={ImgTripchainLoading} alt="tripchain logo" />
      <h1>알고 계셨나요?</h1>
      <p>제주도에서는 다양한 맛집과 특산물이 있어 먹을만한 것들이 많습니다.</p>
    </div>
  );
};

export default NFTLoad;
