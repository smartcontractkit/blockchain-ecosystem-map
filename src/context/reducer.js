import {
  SET_ACTIVE_SECTION,
  SET_PROGRESS,
  SET_VISIBLE,
  SET_NOT_VISIBLE,
  SET_MORE_ENTITY_SHADOW,
  SET_LINK_CLICKED,
  SET_FAVOURITES,
  TOGGLE_FAVOURITES,
} from './types';

export const initialState = {
  visible: [],
  activeSection: null,
  progress: 0,
  showShadow: true,
  linkClicked: false,
  favourites: [],
};

const addVisible = (array, value) => {
  let arr = array;
  if (Array.isArray(arr) && arr.indexOf(value) <= -1) {
    arr = [...arr, value];
  }
  return arr ?? [];
};

const removeVisible = (array, value) => {
  let arr = array;
  if (Array.isArray(arr) && arr.length) {
    arr = arr.filter((res) => res !== value);
  }
  return arr ?? [];
};

const getFavourite = (favourites, url) => {
  return favourites.find((res) => res.url === url);
};

const addToFavourite = (favourites, value) => {
  let newFav = favourites;
  if (newFav.length && getFavourite(favourites, value.url)) {
    newFav = newFav.filter((res) => res.url !== value.url);
  } else if (newFav.length) {
    newFav = [...newFav, value];
  } else {
    newFav = [value];
  }

  return newFav;
};

function reducer(state, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: addVisible(state.visible, action.payload),
      };
    case SET_NOT_VISIBLE:
      return {
        ...state,
        visible: removeVisible(state.visible, action.payload),
      };
    case SET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };
    case TOGGLE_FAVOURITES:
      return {
        ...state,
        favourites: addToFavourite(state.favourites, action.payload),
      };
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: action.payload,
      };
    case SET_MORE_ENTITY_SHADOW:
      return {
        ...state,
        showShadow: action.payload,
      };
    case SET_LINK_CLICKED:
      return {
        ...state,
        linkClicked: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
