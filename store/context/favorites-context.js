import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favMealsIds, setFavMealsIds] = useState([]);

  const addFavorite = (id) => {
    setFavMealsIds((current) => [...current, id]);
  };

  const removeFavorite = (id) => {
    setFavMealsIds((current) => current.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
