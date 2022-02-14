import { createStore } from 'redux';
import colorsReducers from './colors/colors.reducers';

const store = createStore(
  colorsReducers,
);

export default store;
