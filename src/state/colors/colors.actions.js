import { CHANGE_COLOR } from "./colors.types";

const changeColor = (color) => ({
  type: CHANGE_COLOR,
  payload: color
});

export default changeColor;