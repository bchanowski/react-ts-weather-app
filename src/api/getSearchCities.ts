import axios from "axios";
import { CitiesSearchResultT } from "../utils/types";

export const getSearchResults = async (searchValue: string) => {
  let resultList: CitiesSearchResultT = [];
  if (searchValue !== "") {
    try {
      const result = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${
          import.meta.env.VITE_MAPBOX_API_KEY
        }&types=place`
      );
      resultList = result.data.features;
    } catch (err) {
      console.log(err);
    }
  }
  return resultList;
};
