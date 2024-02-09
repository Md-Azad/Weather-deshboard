import Heart from "../../assets/heart.svg"
import RedHeartIcon from "../../assets/heart-red.svg"
import { useContext, useEffect, useState } from "react";
import { favouriteContext, weatherContext } from "../../context";
const AddToFavourite = () => {

  const [isFavourite, toggleIsFavourite] = useState(false);

  const {favourite,addToFavourite,removeFavorite} = useContext(favouriteContext)

  const {weatherData} = useContext(weatherContext);
  const {longitude, latitude, location} = weatherData;

  useEffect(()=>{
    const find = favourite.find((fav)=>fav.location ===location);
      toggleIsFavourite(find)
  },[favourite,location])
  const handleFavourite=()=>{
      const find = favourite.find((fav)=>fav.location ===location);
      if(!find){
        addToFavourite(longitude,latitude,location)
      }
      else{
        removeFavorite(location)
      }
    toggleIsFavourite(!isFavourite)
  }
  return (
    <div className="md:col-span-2">
    <div className="flex items-center justify-end space-x-6">
      <button onClick={handleFavourite} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
        <span>Add to Favourite</span>
        <img src={isFavourite? RedHeartIcon: Heart} alt="" />
      </button>
    </div>
    </div>
  );
};

export default AddToFavourite;
