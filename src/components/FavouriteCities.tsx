import { useEffect, useState } from "react";
import { StorageWeatherT } from "../utils/types";

const FavouriteCities = () => {
  const [favCities, setFavCities] = useState<StorageWeatherT[]>([]);
  useEffect(() => {
    const localData = localStorage.getItem("favouriteCities");
    setFavCities(localData !== null ? JSON.parse(localData) : "");
  }, []);
  return (
    <div>
      {favCities.length !== 0 && favCities.map((city) => <p>{city.city}</p>)}
    </div>
  );
};

export default FavouriteCities;
