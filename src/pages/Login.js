import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../css/pages/Login.module.css";

///////////////////////
// import components //
///////////////////////
import Input from "../components/input/Input";
import RoundSolidButton from "../components/button/RoundSolidButton";

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className={Style.box_login}>
      <div className={Style.box_title}>
        <h1>로그인</h1>
        <p>
          트립체인에 오신 것을 환영합니다!
          <br />
          로그인하고 다양한 서비스를 이용해보세요.
        </p>
      </div>
      <div className={Style.box_login_input}>
        <Input type="text" placeholder="이메일을 입력해주세요" />
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <RoundSolidButton value="로그인" onClick={goToProfile} />
      <div className={Style.box_login_gosignup}>
        <span>아직 회원이 아니신가요?</span>
        <button onClick={goToSignup}>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
