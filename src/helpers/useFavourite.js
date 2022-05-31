import { useStateValue } from '@/context/StateProvider';
import { SET_FAVOURITES, TOGGLE_FAVOURITES } from '@/context/types';
import { useEffect } from 'react';

export default function useFavourite() {
  const [{ favourites }, dispatch] = useStateValue();

  const getFavourite = (url) => {
    return favourites.find((res) => res?.url === url);
  };

  const addToFavourite = (item) => {
    dispatch({ type: TOGGLE_FAVOURITES, payload: item });
  };

  const initiateFavourite = () => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites'));
    dispatch({ type: SET_FAVOURITES, payload: storedFavourites ?? [] });
  };

  const sortItem = (items) => {
    let favouriteItems = [];
    let nonFavouriteItems = [];

    items.forEach((item) => {
      let isFavourite = getFavourite(item.url);

      if (isFavourite) {
        favouriteItems.push(item);
        favouriteItems.sort((a, b) => {
          if (a.title) {
            return a.title > b.title ? 1 : -1;
          } else {
            return a.name > b.name ? 1 : -1;
          }
        });
      } else {
        nonFavouriteItems.push(item);
      }
    });

    return [...favouriteItems, ...nonFavouriteItems];
  };

  useEffect(() => {
    initiateFavourite();
  }, []);

  return {
    getFavourite,
    addToFavourite,
    sortItem,
  };
}
