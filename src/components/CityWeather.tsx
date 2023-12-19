import styled from "styled-components";
import HourlyWeather from "./HourlyWeather";
import DailyWeather from "./DailyWeather";
import { useEffect, useState } from "react";
import { getCityWeatherData } from "../api/getCityWeatherData";
import { useParams } from "react-router-dom";
import { DataWeatherT } from "../utils/types";
import CurrentWeather from "./CurrentWeather";

const Container = styled.div``;

const CityWeather = () => {
  const [weatherData, setWeatherData] = useState<DataWeatherT>();
  const { lat, lng } = useParams();
  useEffect(() => {
    const getData = async () => {
      if (lat && lng) setWeatherData(await getCityWeatherData(lat, lng));
    };
    getData();
  }, [lat, lng]);
  return (
    <Container>
      {weatherData && (
        <>
          <CurrentWeather currentWeatherData={weatherData} />
          <HourlyWeather hourlyWeatherData={weatherData} />
          <DailyWeather dailyWeatherData={weatherData} />
        </>
      )}
    </Container>
  );
};

export default CityWeather;
