import React from "react";
// import { useNavigate } from "react-router-dom";
import Style from "../css/pages/Signup.module.css";
///////////////////////
// import components //
///////////////////////
import LabelInput from "../components/input/LabelInput";
import RoundSolidButton from "../components/button/RoundSolidButton";

const Signup = () => {
  // const navigate = useNavigate();

  return (
    <div className={Style.box_signup}>
      <div className={Style.box_title}>
        <h1>회원가입</h1>
        <p>회원가입하고 여행을 더 재밌게 기록해보세요.</p>
      </div>
      <div className={Style.box_signup_email}>
        <label htmlFor="signupEmail">이메일</label>
        <LabelInput
          id="signupEmail"
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        <div className={Style.box_signup_email_code}>
          <label htmlFor="signupEmailCode">이메일 인증 코드</label>
          <button>재전송</button>
        </div>
        <LabelInput
          id="signupEmailCode"
          type="text"
          placeholder="이메일 인증 코드를 입력해주세요"
        />
        <RoundSolidButton value="인증번호 보내기" />
      </div>
      <div className={Style.box_signup_password}>
        <label htmlFor="signupPassword">비밀번호</label>
        <LabelInput
          id="signupPassword"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <label htmlFor="signupPasswordConfirm">비밀번호 확인</label>
        <LabelInput
          id="signupPasswordConfirm"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
        />
        <RoundSolidButton value="가입하기" />
      </div>
    </div>
  );
};

export default Signup;
