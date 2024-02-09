import { useLocalStorage } from "../hooks";
import { favouriteContext } from "../context";

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("favourite", []);

  const addToFavourite = (latitude, longitude, location) => {
    setFavourite([
      ...favourite,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFavorite = (location) => {
    const restFavourite = favourite.filter((fav) => fav.location !== location);
    setFavourite(restFavourite);
  };

  return (
    <favouriteContext.Provider
      value={{ favourite, addToFavourite, removeFavorite }}
    >
      {children}
    </favouriteContext.Provider>
  );
};

export default FavouriteProvider;
