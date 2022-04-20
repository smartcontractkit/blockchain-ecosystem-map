import { SET_ACTIVESECTION, SET_PROGRESS, SET_VISIBLE, SET_NOTVISIBLE } from './types';

export const initialState = {
  visible: [],
  activeSection: null,
  progress: 0,
};

const addVisible = (array, value) => {
  let arr = array;
  if (Array.isArray(arr)) {
    if (arr.indexOf(value) <= -1) {
      arr.push(value);
    }
  }
  return arr;
};

const removeVisible = (array, value) => {
  let arr = array;
  if (Array.isArray(arr)) {
    if (arr.length) {
      arr = arr.filter((res) => res !== value);
    }
  }
  return arr;
};
function reducer(state, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: addVisible(state.visible, action.payload),
      };
    case SET_NOTVISIBLE:
      return {
        ...state,
        visible: removeVisible(state.visible, action.payload),
      };
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case SET_ACTIVESECTION:
      return {
        ...state,
        activeSection: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
