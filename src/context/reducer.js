import { SET_ACTIVESECTION, SET_PROGRESS, SET_VISIBLE } from './types';

export const initialState = {
  visible: null,
  activeSection: null,
  progress: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: action.payload,
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
