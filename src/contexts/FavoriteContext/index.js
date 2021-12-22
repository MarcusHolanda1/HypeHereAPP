import React, {createContext, useCallback, useContext, useState} from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) => {
  const [favoriteList, setFavoriteList] = useState([]);

  const onFavorite = useCallback(
    sneakers => {
      setFavoriteList([...favoriteList, sneakers]);
    },
    [favoriteList],
  );

  const onRemoveFavorite = useCallback(
    sneakers => {
      const filteredList = favoriteList.filter(item => item.id !== sneakers.id);
      setFavoriteList(filteredList);
    },
    [favoriteList],
  );

  const ifExists = useCallback(
    sneakers => {
      if (favoriteList.filter(item => item.id === sneakers.id).length > 0) {
        return true;
      }
      return false;
    },
    [favoriteList],
  );

  return (
    <FavoritesContext.Provider
      value={{onFavorite, onRemoveFavorite, ifExists, favoriteList}}>
      {children}
    </FavoritesContext.Provider>
  );
};
