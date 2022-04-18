export const initialState = {
  visable: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_VISABLE':
      return {
        ...state,
        visable: [...state.visable, action.payload],
      };

    default:
      return state;
  }
}

export default reducer;
