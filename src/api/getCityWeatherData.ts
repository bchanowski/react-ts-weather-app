import axios from "axios";
import { DataWeatherT } from "../utils/types";

export const getCityWeatherData = async (
  lat: string | undefined,
  lng: string | undefined
): Promise<DataWeatherT> => {
  let weatherData: DataWeatherT = {} as DataWeatherT;
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }&units=metric`
    );
    console.log(result.data);
    weatherData = result.data;
  } catch (err) {
    console.log("err");
  }
  return weatherData;
};
