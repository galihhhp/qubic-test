import { CHANGE_COLOR } from "./colors.types";

const initialState = {
  color: "red"
};

const colorsReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
};

export default colorsReducers;