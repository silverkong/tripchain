import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Style from "../css/pages/Main.module.css";

///////////////////////
// import components //
///////////////////////
import RoundSolidButton from "../components/button/RoundSolidButton";

///////////////////
// import images //
///////////////////
import bgMain from "../images/bg_main.png";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const frontState = useSelector((state) => state.front);

  // 모바일 웹페이지 반영 시 100vh 문제로 vh 재정의
  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const goToCreateNFT = () => {
    getCurrentLocation();
    navigate("/nft/create");
    window.scrollTo(0, 0);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  // 현재 위치 가져옴 (위도,경도)
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
        type: "SET_LAT",
        payload: { lat: position.coords.latitude },
      });
      dispatch({
        type: "SET_LNG",
        payload: { lng: position.coords.longitude },
      });
    });
  };

  return (
    <div>
      <div className={Style.box_background}>
        <div className={Style.box_overlay}>{/* overlay */}</div>
        <img src={bgMain} alt="background" />
        <div className={Style.box_title}>
          {frontState.windowWidth > 1280 ? (
            <p className={Style.txt_main_title}>
              여행을 더 재밌게 기록해 주는
              <br />
              트립체인입니다
            </p>
          ) : (
            <p className={Style.txt_main_title}>
              여행을 더 재밌게
              <br />
              기록해 주는
              <br />
              트립체인입니다
            </p>
          )}

          <p className={Style.txt_sub_title}>
            AI가 그린 내 여행 기록을
            <br />
            NFT로 만들어 많은 사람들과 공유해보세요
          </p>
          <RoundSolidButton
            value="여행기록 남기러 가기"
            onClick={frontState.isLogin ? goToCreateNFT : goToLogin}
          />
        </div>
        <div className={Style.box_arrow}>
          <div className={Style.arrow}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div>
        <h1>About tripchain</h1>
      </div>
    </div>
  );
};

export default Main;
