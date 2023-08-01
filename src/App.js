/**
 * Tripchain
 * @developer Sueun Cho, Rok Kwak, Eunbeen Jung, DoHyun Lim
 * @version 1.2.0
 */

import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

///////////////////////
// import components //
///////////////////////
import Nav from "./components/layout/Nav";
import Nav2 from "./components/layout/Nav2";
import BottomNav from "./components/layout/BottomNav";

//////////////////
// import pages //
//////////////////
import Main from "./pages/Main";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NFTCreate from "./pages/NFTCreate";
import NFTLoad from "./pages/NFTLoad";
import NFTComplete from "./pages/NFTComplete";

function App() {
  const dispatch = useDispatch();

  ///////////
  // state //
  ///////////
  const frontState = useSelector((state) => state.front);

  // 로그인 판별 : true - 로그인 O, false - 로그인 X
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {}, [authenticate]);

  // 위치 확인
  const locationNow = useLocation();

  // window.innerWidth resize
  useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: "SET_WINDOW_WIDTH",
        payload: { windowWidth: window.innerWidth },
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, frontState.windowWidth]);

  return (
    <div>
      {locationNow.pathname === "/signup" ||
      locationNow.pathname.substring(0, 4) === "/nft" ? (
        <Nav2 />
      ) : (
        <Nav />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route path="/signup" element={<Signup />} />
        {/* Image Generating */}
        <Route path="/nft/create" element={<NFTCreate />} />
        <Route path="/nft/loading" element={<NFTLoad />} />
        <Route path="/nft/complete" element={<NFTComplete />} />
      </Routes>
      {locationNow.pathname === "/signup" ||
      locationNow.pathname.substring(0, 4) === "/nft" ? null : (
        <BottomNav authenticate={authenticate} />
      )}
    </div>
  );
}

export default App;
