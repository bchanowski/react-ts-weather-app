import styled from "styled-components";
import HourlyWeather from "./HourlyWeather";
import DailyWeather from "./DailyWeather";
import { useEffect, useState } from "react";
import { getCityWeatherData } from "../api/getCityWeatherData";
import { useParams } from "react-router-dom";
import { DataWeatherT, StorageWeatherT } from "../utils/types";
import CurrentWeather from "./CurrentWeather";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./shared/LoadingSpinner";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FutureDataCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddToStorage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e6990;
  color: #e9e3b4;
  font-size: 15px;
  text-transform: uppercase;
  height: 3svh;
  margin: 0px;
  cursor: pointer;
`;

const CityWeather = () => {
  const [favouriteCities, setFavouriteCities] = useState<StorageWeatherT[]>([]);
  const [wasAdded, SetWasAdded] = useState(false);
  const { city, country, lat, lng } = useParams();
  useEffect(() => {
    const localData = localStorage.getItem("favouriteCities");
    setFavouriteCities(localData !== null ? JSON.parse(localData) : []);
  }, []);
  const { data: weatherData, isLoading } = useQuery<DataWeatherT>({
    queryKey: ["weatherData"],
    queryFn: () => getCityWeatherData(lat, lng),
  });
  const addCityToStorage = () => {
    let favCities: StorageWeatherT[] = [];
    favCities = favouriteCities;
    if (city && country && lat && lng) {
      const dataToAdd: StorageWeatherT = {
        city,
        country,
        coords: [lat, lng],
      };
      favCities.push(dataToAdd);
      localStorage.setItem("favouriteCities", JSON.stringify(favCities));
      SetWasAdded(true);
    }
  };
  return (
    <>
      {(favouriteCities.findIndex((value) => value.city === city) === -1 ||
        !wasAdded) && (
        <AddToStorage onClick={() => addCityToStorage()}>
          Add To Favoritues
        </AddToStorage>
      )}
      <Container>
        {isLoading && <LoadingSpinner />}
        {weatherData && (
          <>
            <CurrentWeather currentWeatherData={weatherData.current} />
            <FutureDataCont>
              <HourlyWeather
                hourlyWeatherData={weatherData.hourly}
                timezone_offset={weatherData.timezone_offset}
              />
              <DailyWeather
                dailyWeatherData={weatherData.daily}
                timezone_offset={weatherData.timezone_offset}
              />
            </FutureDataCont>
          </>
        )}
      </Container>
    </>
  );
};

export default CityWeather;
