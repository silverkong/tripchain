import React, { useEffect, useState } from "react";
import Style from "../../css/pages/NFTCreate.module.css";

const Prompt = ({ id, name, src, alt, value }) => {
  // 브라우저 너비 값에 맞게 width, height 값 가변 적용
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [promptStyle, setPromptStyle] = useState({
    width: (windowWidth - 44) / 2.1,
    height: (windowWidth - 44) / 2.1,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleResizeImg = () => {
      setPromptStyle({
        width: (windowWidth - 44) / 2.1,
        height: (windowWidth - 44) / 2.1,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResizeImg();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className={Style.prompt_radio}
      />
      <label
        htmlFor={id}
        className={name === "style" ? Style.prompt_style : Style.prompt}
        style={promptStyle}
      >
        <img src={src} alt={alt} />
        <span>{alt}</span>
        <div className={Style.ic_check}></div>
      </label>
    </div>
  );
};

export default Prompt;
