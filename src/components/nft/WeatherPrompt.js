import React from "react";
import Style from "../../css/pages/NFTCreate.module.css";

///////////////////////
// import components //
///////////////////////
import Prompt from "./Prompt";

///////////////////
// import images //
///////////////////
import icPromptWeather1 from "../../images/ic_prompt_weather_1.png";
import icPromptWeather2 from "../../images/ic_prompt_weather_2.png";
import icPromptWeather3 from "../../images/ic_prompt_weather_3.png";
import icPromptWeather4 from "../../images/ic_prompt_weather_4.png";
import icPromptWeather5 from "../../images/ic_prompt_weather_5.png";
import icPromptWeather6 from "../../images/ic_prompt_weather_6.png";

const weatherPrompt = [
  {
    id: "promptWeather1",
    name: "weather",
    src: icPromptWeather1,
    weather: "맑아요",
    value: "clear",
  },
  {
    id: "promptWeather2",
    name: "weather",
    src: icPromptWeather2,
    weather: "비가 와요",
    value: "rainy",
  },
  {
    id: "promptWeather3",
    name: "weather",
    src: icPromptWeather3,
    weather: "흐려요",
    value: "cloudy",
  },
  {
    id: "promptWeather4",
    name: "weather",
    src: icPromptWeather4,
    weather: "눈이 내려요",
    value: "snowy",
  },
  {
    id: "promptWeather5",
    name: "weather",
    src: icPromptWeather5,
    weather: "바람이 불어요",
    value: "windy",
  },
  {
    id: "promptWeather6",
    name: "weather",
    src: icPromptWeather6,
    weather: "안개가 꼈어요",
    value: "foggy",
  },
];

const WeatherPrompt = () => {
  return (
    <div className={Style.box_prompt}>
      {weatherPrompt.map((weather) => (
        <Prompt
          id={weather.id}
          key={weather.id}
          name={weather.name}
          src={weather.src}
          alt={weather.weather}
          value={weather.value}
        />
      ))}
    </div>
  );
};

export default WeatherPrompt;
