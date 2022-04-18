export const initialState = {
  theme: 'light',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: state.theme,
      };

    default:
      return state;
  }
}

export default reducer;
