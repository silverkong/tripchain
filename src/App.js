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
import MarketplaceDetail from "./pages/MarketplaceDetail";
import ListingMarketplace from "./pages/ListingMarketplace";

function App() {
  const dispatch = useDispatch();

  ///////////
  // state //
  ///////////
  const frontState = useSelector((state) => state.front);

  // 로그인 판별 : true - 로그인 O, false - 로그인 X
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {}, [authenticate]);

  // 페이지 위치 확인
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
      locationNow.pathname.substring(0, 4) === "/nft" ||
      (locationNow.pathname.substring(0, 12) === "/marketplace" &&
        locationNow.pathname.substring(12).length > 1) ? (
        <Nav2 />
      ) : (
        <Nav />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Marketplace */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<MarketplaceDetail />} />
        <Route
          path="/marketplace/listing/:id"
          element={<ListingMarketplace />}
        />
        {/* Profile, Login, Signup */}
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
      locationNow.pathname.substring(0, 4) === "/nft" ||
      (locationNow.pathname.substring(0, 12) === "/marketplace" &&
        locationNow.pathname.substring(12).length > 1) ? null : (
        <BottomNav authenticate={authenticate} />
      )}
    </div>
  );
}

export default App;
