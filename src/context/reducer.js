import { SET_VISIBLE } from './types';

export const initialState = {
  visible: null,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
