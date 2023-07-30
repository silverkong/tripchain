import React from "react";
import Style from "../../css/pages/NFTCreate.module.css";

///////////////////////
// import components //
///////////////////////
import Prompt from "./Prompt";

///////////////////
// import images //
///////////////////
import icPromptMood1 from "../../images/ic_prompt_mood_1.png";
import icPromptMood2 from "../../images/ic_prompt_mood_2.png";
import icPromptMood3 from "../../images/ic_prompt_mood_3.png";
import icPromptMood4 from "../../images/ic_prompt_mood_4.png";
import icPromptMood5 from "../../images/ic_prompt_mood_5.png";
import icPromptMood6 from "../../images/ic_prompt_mood_6.png";

const moodPrompt = [
  {
    id: "promptMood1",
    name: "mood",
    src: icPromptMood1,
    mood: "행복해요",
    value: "happy",
  },
  {
    id: "promptMood2",
    name: "mood",
    src: icPromptMood2,
    mood: "매우 신나요",
    value: "excited",
  },
  {
    id: "promptMood3",
    name: "mood",
    src: icPromptMood3,
    mood: "두근두근해요",
    value: "pounding",
  },
  {
    id: "promptMood4",
    name: "mood",
    src: icPromptMood4,
    mood: "피곤해요",
    value: "tired",
  },
  {
    id: "promptMood5",
    name: "mood",
    src: icPromptMood5,
    mood: "우울해요",
    value: "depressed",
  },
  {
    id: "promptMood6",
    name: "mood",
    src: icPromptMood6,
    mood: "화나요",
    value: "angry",
  },
];

const MoodPrompt = () => {
  return (
    <div className={Style.box_prompt}>
      {moodPrompt.map((mood) => (
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

export default MoodPrompt;
