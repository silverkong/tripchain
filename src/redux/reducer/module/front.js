// 초기값
let initialState = {
  windowWidth: window.innerWidth,
};

function reducerFront(state = initialState, action) {
  switch (action.type) {
    case "SET_WINDOW_WIDTH":
      return { ...state, windowWidth: action.payload.windowWidth };
    default:
      return { ...state };
  }
}

export default reducerFront;
