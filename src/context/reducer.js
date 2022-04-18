import { ADD_VISIBLE, REMOVE_VISIBLE } from './types';

export const initialState = {
  visible: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_VISIBLE:
      return {
        ...state,
        visible: [...state.visible, action.payload],
      };

    case REMOVE_VISIBLE:
      return {
        ...state,
        visible: state.visible.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
}

export default reducer;
