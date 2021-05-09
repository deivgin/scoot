import { GET_DATA, SET_TAB } from "./tabs.types";

const INITIAL_STATE = null;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return (state = action.payload);
    case SET_TAB:
      return { ...state, currTab: action.payload };
    default:
      return state;
  }
};

export default reducer;
