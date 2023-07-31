import React from "react";
import Style from "../../css/pages/NFTCreate.module.css";

///////////////////////
// import components //
///////////////////////
import Prompt from "./Prompt";

///////////////////
// import images //
///////////////////
import icPromptStyle1 from "../../images/ic_prompt_style_1.png";
import icPromptStyle2 from "../../images/ic_prompt_style_2.png";
import icPromptStyle3 from "../../images/ic_prompt_style_3.png";
import icPromptStyle4 from "../../images/ic_prompt_style_4.png";
import icPromptStyle5 from "../../images/ic_prompt_style_5.png";
import icPromptStyle6 from "../../images/ic_prompt_style_6.png";

const stylePrompt = [
  {
    id: "promptStyle1",
    name: "style",
    src: icPromptStyle1,
    mood: "수채화",
    value: "detailed watercolor",
  },
  {
    id: "promptStyle2",
    name: "style",
    src: icPromptStyle2,
    mood: "색연필",
    value: "detailed color pencil",
  },
  {
    id: "promptStyle3",
    name: "style",
    src: icPromptStyle3,
    mood: "어린이 그림",
    value: "child's painting",
  },
  {
    id: "promptStyle4",
    name: "style",
    src: icPromptStyle4,
    mood: "픽셀화",
    value: "pixel",
  },
  {
    id: "promptStyle5",
    name: "style",
    src: icPromptStyle5,
    mood: "디지털 드로잉",
    value: "digital drawing",
  },
  {
    id: "promptStyle6",
    name: "style",
    src: icPromptStyle6,
    mood: "스티커화",
    value: "sticky",
  },
];

const StylePrompt = () => {
  return (
    <div className={Style.box_prompt}>
      {stylePrompt.map((mood) => (
        <Prompt
          id={mood.id}
          key={mood.id}
          name={mood.name}
          src={mood.src}
          alt={mood.mood}
          value={mood.value}
        />
      ))}
    </div>
  );
};

export default StylePrompt;
