import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "../css/pages/NFTCreate.module.css";

///////////////////////
// import components //
///////////////////////
import WeatherPrompt from "../components/nft/WeatherPrompt";
import MoodPrompt from "../components/nft/MoodPrompt";
import StylePrompt from "../components/nft/StylePrompt";
import SolidButton from "../components/button/SolidButton";

const SelectComponent = [
  {
    id: 1,
    name: "weather",
    value: "기분 선택하러 가기",
  },
  {
    id: 2,
    name: "mood",
    value: "스타일 선택하러 가기",
  },
  {
    id: 3,
    name: "style",
    value: "여행 기록 만들기",
  },
];

const NFTCreate = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [content, setContent] = useState("weather");

  const handleClickButton = () => {
    if (count === 2) {
      // 이미지 제너레이팅
      navigate("/nft/loading");
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setContent(SelectComponent[count].name);
  }, [count]);

  const title = {
    weather: "오늘 날씨 어때요?",
    mood: "오늘 기분 어때요?",
    style: "어떤 그림스타일을 원하세요?",
  };

  const subtitle = {
    weather: "오늘 여행지의 날씨를 골라주세요",
    mood: "오늘 여행지에서의 기분을 골라주세요",
    style: "마음에 드는 그림 스타일을 골라주세요",
  };

  const prompt = {
    weather: <WeatherPrompt />,
    mood: <MoodPrompt />,
    style: <StylePrompt />,
  };

  return (
    <div className={Style.box_create_nft}>
      <div className={Style.box_title}>
        <h1>{content && title[content]}</h1>
        <span>{content && subtitle[content]}</span>
      </div>
      <form>{content && prompt[content]}</form>
      <SolidButton
        onClick={handleClickButton}
        name={SelectComponent[count].name}
        key={SelectComponent[count].id}
        value={SelectComponent[count].value}
      />
    </div>
  );
};

export default NFTCreate;
