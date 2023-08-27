// 초기값
let initialState = {
  windowWidth: window.innerWidth,
  checkedArr: [],
  checkImage: "",
  isLogin: false,
  salesType: "",
  auctionType: "",
};

function reducerFront(state = initialState, action) {
  switch (action.type) {
    case "SET_WINDOW_WIDTH":
      return { ...state, windowWidth: action.payload.windowWidth };
    case "SET_CHECK":
      return { ...state, checkedArr: action.payload.checkedArr };
    case "SET_CHECK_IMAGE":
      return { ...state, checkImage: action.payload.checkImage };
    case "SET_IS_LOGIN":
      return { ...state, isLogin: action.payload.isLogin };
    case "SET_SALES_TYPE":
      return { ...state, salesType: action.payload.salesType };
    case "SET_AUCTION_TYPE":
      return { ...state, auctionType: action.payload.auctionType };
    default:
      return { ...state };
  }
}

export default reducerFront;
